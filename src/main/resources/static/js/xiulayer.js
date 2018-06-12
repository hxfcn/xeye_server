
var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
    return global.setTimeout(callback, 1000 / 60);
};
function XiuMarker(){
	this.mappt;
	this.pixpt;
	this.color = '#F9815C';
	this.radius = 0;
	this.maxradius = 10;
	this.img = null;
	this.build= function(map){
		this.pixpt = map.getPixelFromCoordinate(this.mappt);
	};
	
	this.draw = function(context){
		if(this.img == null) {
			this.img = new Image();
			if (this.type == 1){
				this.img.src="ImageResources/Landmark/5.png";
			}
			else if(this.type == 0){
				this.img.src="ImageResources/Landmark/6.png";
			}
			else{
				this.img.src="ImageResources/Landmark/4.png";
			}
			
		}
        context.save();
        context.drawImage(this.img,this.pixpt[0]-8, this.pixpt[1] - 16,20,24 );
        context.restore();
	}
	
	this.animation = function(context){
		if(this.pixpt == undefined){
			return;
		}
		this.radius += 0.3;
        if (this.radius >= this.maxradius) {
            this.radius = 0;
        }
		
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        context.moveTo(this.pixpt[0] + this.radius, this.pixpt[1]);
        context.arc(this.pixpt[0], this.pixpt[1], this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
        context.restore();
	};
}
function XiuLine(){
	this.map0;
	this.map1;
	
	this.pix0;
	this.pix1;
	this.path=[];
	this.step = 0;
	this.fillColor = '#F9815C';
	this.shadowColor = '#F9815C';
	this.shadowBlur = 5;
	this.moveRadius = 2;
	this.drawLine = function(context){
		var pointList = this.path;
        var len = pointList.length;
        context.save();
        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = this.fillColor;

        context.moveTo(pointList[0][0], pointList[0][1]);
        for (var i = 0; i < len; i++) {
            context.lineTo(pointList[i][0], pointList[i][1]);
        }
        
        context.stroke();
        context.restore();
        //this.step = 0; //缩放地图时重新绘制动画
	};
	
	
	
	this.animation = function(context){
		if(this.path.length <1) return;
		var pointList = this.path;
		
		this.step += 1;
        if (this.step >= pointList.length) {
            this.step = 0;
        }
        
        context.save();
        context.fillStyle = this.fillColor;
        context.shadowColor = this.fillColor;
        context.shadowBlur = this.shadowBlur;
        context.beginPath();
        context.arc(pointList[this.step][0], pointList[this.step][1], this.moveRadius, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        context.restore();
	};
	
	this.buildPath= function(map){
		this.pix0 = map.getPixelFromCoordinate(this.map0);
		this.pix1 = map.getPixelFromCoordinate(this.map1);
		var distance = this.getDistance(this.pix0, this.pix1);
		if(distance < 50){
			this.path = [this.pix0, this.pix1];
		}else{
			var pa = this.getPointList(this.pix0, this.pix1);
			this.path = pa;
		}
	};
	
	this.getPointList = function (from, to) {
        var points = [from,to];
        var ex = points[1][0];
        var ey = points[1][1];
        points[3] = [ex, ey];
        points[1] = this.getOffsetPoint(points[0], points[3]);
        points[2] = this.getOffsetPoint(points[3], points[0]);
        points = this.smoothSpline(points, false);
        //修正最后一点在插值产生的偏移
        points[points.length - 1] = [ex, ey];
        return points;
    };
    this.smoothSpline = function (points, isLoop) {
        var len = points.length;
        var ret = [];
        var distance = 0;
        for (var i = 1; i < len; i++) {
            distance += this.getDistance(points[i - 1], points[i]);
        }
        var segs = distance / 2;
        segs = segs < len ? len : segs;
        for (var i = 0; i < segs; i++) {
            var pos = i / (segs - 1) * (isLoop ? len : len - 1);
            var idx = Math.floor(pos);
            var w = pos - idx;
            var p0;
            var p1 = points[idx % len];
            var p2;
            var p3;
            if (!isLoop) {
                p0 = points[idx === 0 ? idx : idx - 1];
                p2 = points[idx > len - 2 ? len - 1 : idx + 1];
                p3 = points[idx > len - 3 ? len - 1 : idx + 2];
            } else {
                p0 = points[(idx - 1 + len) % len];
                p2 = points[(idx + 1) % len];
                p3 = points[(idx + 2) % len];
            }
            var w2 = w * w;
            var w3 = w * w2;

            ret.push([this.interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), this.interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)]);
        }
        return ret;
    };
    
    this.getOffsetPoint = function (start, end) {
        var distance = this.getDistance(start, end) / 3; //除以3？
        var angle, dX, dY;
        var mp = [start[0], start[1]];
        var deltaAngle = -0.2; //偏移0.2弧度
        if (start[0] != end[0] && start[1] != end[1]) {
            //斜率存在
            var k = (end[1] - start[1]) / (end[0] - start[0]);
            angle = Math.atan(k);
        } else if (start[0] == end[0]) {
            //垂直线
            angle = (start[1] <= end[1] ? 1 : -1) * Math.PI / 2;
        } else {
            //水平线
            angle = 0;
        }
        if (start[0] <= end[0]) {
            angle -= deltaAngle;
            dX = Math.round(Math.cos(angle) * distance);
            dY = Math.round(Math.sin(angle) * distance);
            mp[0] += dX;
            mp[1] += dY;
        } else {
            angle += deltaAngle;
            dX = Math.round(Math.cos(angle) * distance);
            dY = Math.round(Math.sin(angle) * distance);
            mp[0] -= dX;
            mp[1] -= dY;
        }
        return mp;
    };
    
    this.interpolate = function (p0, p1, p2, p3, t, t2, t3) {
        var v0 = (p2 - p0) * 0.5;
        var v1 = (p3 - p1) * 0.5;
        return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
    };
    this.getDistance = function (p1, p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    };

};

function XiuLayer(map,opts){
	var self = this;
	this.map = map;

	this.points =[];
	this.lines = [];
	this.options = {
        //线条宽度
        lineWidth: 1,
        //线条颜色
        strokeStyle: '#F9815C',
        //移动点半径
        moveLineWidth:3,
        //移动点颜色
        moveLineColor:'#F9815C',
        //移动点阴影颜色
        moveLineShadowColor: '#F9815C',
        //移动点阴影大小
        moveLineShadowBlur: 10,
        //移动步长
        moveSteps:500.0,
        
        colors:[
        	'#ecc2a6',
        	'#b5d9df',
        	'#75b4d2',
        	'#cbfd4b'
        ],
        
        getColor:function(path){
        	var color = this.colors[path];
        	if(color == undefined){
        		color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
        		this.colors[path] = color;
        	}
        	return color;
        }
    };
	opts = opts | {};
	Object.keys(opts).forEach(function (key) {
		this.options[key] = opts[key];
	});

	this.init = function(){
		var canvas = this.canvas = document.createElement('canvas');
		var ctx = this.ctx = this.canvas.getContext('2d');

		var canvas1 = this.canvas1 = document.createElement('canvas');
		var ctx1 = this.ctx1 = this.canvas1.getContext('2d');
		
		canvas.style.cssText = 'position:absolute;left:0;top:0;z-index:0;pointer-events:none;';
		canvas1.style.cssText = 'position:absolute;left:0;top:0;z-index:0;pointer-events:none;';
		
		this.map.on('postrender', function(e) {
			self.draw();
        });
		this.map.getView().on('change:center', function(e) {
			self.rebuild();
        });
		this.map.getView().on('change:resolution', function(e) {
			self.rebuild();
        });
		this.map.on('moveend', function(e) {
			self.rebuild();
        });

		this.adjustSize();
		//this.vectorContext = ol.render.toContext(canvas.getContext('2d'), {size: [100, 100]});
		var div = map.getTargetElement();
		//div.appendChild(canvas);
		div.appendChild(canvas);
		div.appendChild(canvas1);
		
        (function drawFrame() {
            requestAnimationFrame(drawFrame);
            self.animation();
        })();
	};
	
	this.rebuild = function(){
		self.lines.forEach(function (line, i){
			line.buildPath(map);
		});
		self.points.forEach(function (point, i){
			point.build(map);
		});
	}
	
	this.adjustSize = function adjustSize() {
        var size = this.map.getSize();
        var canvas = this.canvas;
        
        var w = size[0];
        var h= size[1];
        
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';

		var canvas1 = this.canvas1;
        canvas1.width = w;
        canvas1.height = h;
        canvas1.style.width = w + 'px';
		canvas1.style.height = h + 'px';
		
		/*var ctx = this.ctx;
		var pixelRatio = 1;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        // console.log(ctx.canvas.height, canvasHeight);
        ctx.scale(pixelRatio, pixelRatio);*/

	};
	
	this.animation = function(){
		var context = this.ctx1;
		if (!context) {
			return;
		}

		//context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		
        context.fillStyle = 'rgba(0,0,0,0.92)';
        var prev = context.globalCompositeOperation;
        context.globalCompositeOperation = 'destination-in';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        context.globalCompositeOperation = prev;
		
		var map = self.map;
		var options = self.options;
		{
			context.save();
			self.lines.forEach(function (line, i){
				line.animation(context);
			});
			context.restore();
			context.save();
			self.points.forEach(function (point, i){
				point.animation(context);
			});
			context.restore();
		}
	};
	
	this.draw = function(){

		var context = this.ctx;
		if (!context) {
			return;
		}

		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		
//        context.fillStyle = 'rgba(0,0,0,.97)';
//        var prev = context.globalCompositeOperation;
//        context.globalCompositeOperation = 'destination-in';
//        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//        context.globalCompositeOperation = prev;
		
		var map = self.map;
		var options = self.options;
		{
			context.save();
			self.lines.forEach(function (line, i){
				//line.buildPath(map);
				line.drawLine(context);
				//line.animation(context);
			});
			context.restore();
			context.save();
			self.points.forEach(function (point, i){
				point.draw(context);
			});
			context.restore();
		}
		
	};

	this.clear = function(){

	};

	this.setData = function(data){
		self.lines = [];
		
		data.lines.forEach(function (line, i){
			var xl= new XiuLine();
			xl.map0 = line.from;
			xl.map1 = line.to;
			xl.fillColor = self.options.getColor(line.path);
			self.lines.push(xl);
		});
		data.points.forEach(function (point, i){
			var xm= new XiuMarker();

            var size = 10;
            if(point.type == 1){
            	size = 21;
            }else if(point.type == 0){
            	size = 15;
            }
            xm.maxradius = size;
            
            var color = self.options.getColor(point.path);
            xm.color = color;
            xm.ip = point.ip;
            xm.type = point.type;
            xm.mappt = point.lonlat;
			self.points.push(xm);
		});
	};
	
	this.pickMarker = function(x,y){
    	for(var i=0; i < this.points.length;i++){
    		var point = this.points[i];
        	var pixel = point.pixpt;
        	var rx = pixel[0] - x;
        	var ry = pixel[1] - y;
        	if(rx < 0) rx = rx * -1;
        	if(ry < 0) ry = ry * -1;
        	
        	if(rx + ry < 10){
        		return point;
        	}
    	}
        return null;
    }
	self.init();
	return xiulayer;
};

