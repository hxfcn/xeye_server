(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MoveLine = factory());
}(this, (function () { 'use strict';

OpenLayers.Layer.CanvasLayer = OpenLayers.Class(OpenLayers.Layer, {
    points: null,
    canvas: null,
    initialize: function initialize(name, options) {
        OpenLayers.Layer.prototype.initialize.apply(this, arguments);
        this.points = [];

        var canvas = this.canvas = document.createElement('canvas');
        var ctx = this.ctx = this.canvas.getContext('2d');
        canvas.style.cssText = 'position:absolute;' + 'left:0;' + 'top:0;' + 'z-index:0;';
        this.adjustRadio();
        this.div.appendChild(canvas);
    },
    adjustSize: function adjustSize() {
        var size = this.map.getSize();
        var canvas = this.canvas;
        canvas.width = size.w;
        canvas.height = size.h;
        canvas.style.width = size.w + 'px';
        canvas.style.height = size.h + 'px';
    },
    adjustRadio: function adjustRadio() {
        var ctx = this.ctx;
        var backingStore = ctx.backingStorePixelRatio || ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var pixelRatio = (window.devicePixelRatio || 1) / backingStore;
        var canvasWidth = ctx.canvas.width;
        var canvasHeight = ctx.canvas.height;
        ctx.canvas.width = canvasWidth * pixelRatio;
        ctx.canvas.height = canvasHeight * pixelRatio;
        ctx.canvas.style.width = canvasWidth + 'px';
        ctx.canvas.style.height = canvasHeight + 'px';
        // console.log(ctx.canvas.height, canvasHeight);
        ctx.scale(pixelRatio, pixelRatio);
    },
    moveTo: function moveTo(bounds, zoomChanged, dragging) {
        var self = this;
        self.adjustSize();
        OpenLayers.Layer.prototype.moveTo.apply(self, arguments);

        clearTimeout(self.timeoutID);
        self.timeoutID = setTimeout(function () {
            self._draw();
        }, 15);
    },
    _draw: function _draw() {
        var map = this.map;
        var size = map.getSize();
        var center = map.getCenter();
        if (center) {
            var pixel = map.getLayerPxFromLonLat(center);
            this.canvas.style.left = pixel.x - size.w / 2 + 'px';
            this.canvas.style.top = pixel.y - size.h / 2 + 'px';

            this.options.render && this.options.render.call(this);
        }
    },
    CLASS_NAME: 'OpenLayers.Layer.CanvasLayer'
});

var CanvasLayer = OpenLayers.Layer.CanvasLayer;

var global = typeof window === 'undefined' ? {} : window;

var requestAnimationFrame = global.requestAnimationFrame || global.mozRequestAnimationFrame || global.webkitRequestAnimationFrame || global.msRequestAnimationFrame || function (callback) {
    return global.setTimeout(callback, 1000 / 60);
};

var MoveLine = function MoveLine(map, userOptions) {
    var self = this;

    //默认参数
    var defaultOpts = {
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
        moveLineShadowBlur: 5,
        //移动步长
        moveSteps:500.0,
    };

    //参数合并
    var merge = function merge(userOptions, defaultOpts) {
        Object.keys(userOptions).forEach(function (key) {
            defaultOpts[key] = userOptions[key];
        });
    };

    function Marker(opts) {
        this.city = opts.name;
        this.lonlat = opts.lonlat;
        this.speed = opts.speed || 0.15;
        this.radius = 0;
        this.max = opts.max || 20;
    }

    Marker.prototype.draw = function (context) {
        context.save();
        context.beginPath();
        var pixel = map.getPixelFromLonLat(this.lonlat);
        context.strokeStyle = defaultOpts.strokeStyle;
        context.moveTo(pixel.x + this.radius, pixel.y);
        context.arc(pixel.x, pixel.y, this.radius, 0, Math.PI * 2);
        context.stroke();
        context.closePath();
        context.restore();
    };

    function MarkLine(opts) {
        this.name = opts.name;
        this.from = opts.from;
        this.to = opts.to;
        this.step = 0.0;
    }

    MarkLine.prototype.draw = function (context) {
        var fromPixel = map.getPixelFromLonLat(this.from);
        var toPixel = map.getPixelFromLonLat(this.to);
        context.beginPath();
        context.lineWidth = defaultOpts.lineWidth;
        context.strokeStyle = defaultOpts.strokeStyle;
        context.moveTo(fromPixel.x, fromPixel.y);
        context.lineTo(toPixel.x, toPixel.y);
        context.stroke();
    };

    MarkLine.prototype.drawMovePoint = function (context) {
         
        var t = this.step / defaultOpts.moveSteps;
        var t1 = (this.step + 1) / defaultOpts.moveSteps;
        
        var p1 = this.from;
        var p2 = this.to;
        
        var df = new OpenLayers.LonLat(90,10);
        var dt = new OpenLayers.LonLat(90,10);
        df.lon = p1.lon * (1 - t) + p2.lon * t;
        df.lat = p1.lat * (1 - t) + p2.lat * t;
        
        dt.lon = p1.lon * (1 - t1) + p2.lon * t1;
        dt.lat = p1.lat * (1 - t1) + p2.lat * t1;
        
        var fromPixel = map.getPixelFromLonLat(df);
        var toPixel = map.getPixelFromLonLat(dt);
        
        context.save();
        context.beginPath();
        context.strokeStyle = defaultOpts.moveLineColor;
        context.shadowColor = defaultOpts.moveLineShadowColor;
        context.shadowBlur = defaultOpts.moveLineShadowBlur;
        context.lineWidth = defaultOpts.moveLineWidth;

        context.moveTo(fromPixel.x, fromPixel.y);
        context.lineTo(toPixel.x, toPixel.y);
        context.stroke();
        context.closePath();
        context.restore();
        
        this.step += 1.0;
        if (this.step >= defaultOpts.moveSteps) {
            this.step = 0.0;
        }
        
    };
    
    //初始化
    var lineTool = {
        markLines: [],
        init: function init() {
            merge(userOptions, defaultOpts);

            var baseCanvasLayer = this.baseCanvasLayer = new CanvasLayer("mycanvas", {
                render: this.brush
            });

            var animateLayer = this.animateLayer = new CanvasLayer("animateCanvas", {
                render: this.animation
            });

            map.addLayer(baseCanvasLayer);
            map.addLayer(animateLayer);

            (function drawFrame() {
                requestAnimationFrame(drawFrame);
                lineTool.animation();
            })();
        },
        brush: function brush() {
            var context = this.ctx;
            if (!context) {
                return;
            }
            lineTool.addMarkLine();
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            lineTool.markLines.forEach(function (line) {
                line.draw(context);
            });
        },
        addMarkLine: function addMarkLine() {
            var self = this;
            if (self.markLines && self.markLines.length > 0) return;
            self.markLines = [];
            var dataset = defaultOpts.lines;
            dataset.forEach(function (line, i) {
                self.markLines.push(new MarkLine({
                    from: new OpenLayers.LonLat(line.from[0], line.from[1]).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()),
                    to: new OpenLayers.LonLat(line.to[0], line.to[1]).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject())
                }));
            });
        },
        animation: function animation() {
            var context = lineTool.animateLayer.ctx;
            if (!context) {
                return;
            }


            lineTool.addMarker();

            context.save();
            context.fillStyle = 'rgba(0,0,0,.97)';
            var prev = context.globalCompositeOperation;
            context.globalCompositeOperation = 'destination-in';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            context.globalCompositeOperation = prev;

            lineTool.markers.forEach(function (marker) {
                marker.draw(context);
                marker.radius += marker.speed;
                if (marker.radius > marker.max) {
                    marker.radius = 0;
                }
            });
            
            lineTool.markLines.forEach(function (line) {
                line.drawMovePoint(context);
            });
            
            

        },
        addMarker: function addMarker() {
            var self = this;
            if (self.markers && self.markers.length > 0) return;
            self.markers = [];
            var dataset = defaultOpts.points;
            dataset.forEach(function (point, i) {
                var marker = point.lonlat;
                self.markers.push(new Marker({
                    lonlat: new OpenLayers.LonLat(marker[0], marker[1]).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()),
                    //city: marker[2],
                    max: Math.floor(Math.random() * 10 + 10)
                }));
            });
        }
    };

    lineTool.init();
};

return MoveLine;

})));
