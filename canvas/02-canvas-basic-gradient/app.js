
var canvas, ctx;
 
function createRgbColorString(r,g,b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
 
 
 
    window.onload = function() {
      canvas = document.getElementById("tutorial");
      if( canvas && canvas.getContext ) {
        ctx = canvas.getContext("2d");
        canvas.width = document.body.clientWidth; 
        canvas.height = document.body.clientHeight;
        var canvasW = canvas.width;
        var canvasH = canvas.height;        
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        
        
        
        //Draw a line
        ctx.beginPath();
        ctx.moveTo(10, 200);
        ctx.lineTo(400, 200);
        ctx.strokeStyle=createRgbColorString(0,222,0);
        ctx.lineWidth = 15;
        ctx.stroke();

        //Loop and create a gradient        
        var startY = 300;
        for (var index = 0; index < 255; index++) {
            //Draw a line
            ctx.beginPath();
            ctx.moveTo(0, startY + index);
            ctx.lineTo(canvasW, startY + index);
            ctx.strokeStyle=createRgbColorString(0,0, index);
            ctx.lineWidth = 1;
            ctx.stroke();
          
        }
        
       }
    }
 
