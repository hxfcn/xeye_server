
var XF = {};

XF.SERVER = 'http://127.0.0.1:8080'

function convolve(context) {
    var canvas = context.canvas;
    var width = canvas.width;
    var height = canvas.height;
    var inputData = context.getImageData(0, 0, width, height).data;
    
    var output = context.createImageData(width, height);
    var pix = output.data;
    
    var r,g,b;
    for (var i = 0, n = pix.length; i < n; i += 4) {
        r = inputData[i];
        g = inputData[i+1];
        b = inputData[i+2];
        
        
        r =  Math.min(Math.abs(r - 234),Math.abs( r - 163)) *3;
        var b2 =  Math.abs(g - 230)*4;
        var g2 =  Math.abs(b - 230)*2;
        
        pix[i] = (r);
        pix[i+1] = (g2);
        pix[i+2] = (b2);
        
        //pix[i] = parseInt(r);
        //pix[i+1] = parseInt(g);
        //pix[i+2] = parseInt(b);
        pix[i+3] = 255;
        
    }
    context.putImageData(output, 0, 0);
}