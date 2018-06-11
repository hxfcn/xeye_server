
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

        var v = 0.299 * r+ 0.587 * g + 0.114 *b;
        
        pix[i] = 180 - r;
        pix[i+1] = 220 - g;
        pix[i+2] = 280 - b;
        pix[i+3] = 255;
        
    }
    context.putImageData(output, 0, 0);
}