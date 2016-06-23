
var canvas, ctx;
 
function writeMessage(canvas, message, mousePos) {
        var context = canvas.getContext('2d');
        context.fillStyle = "rgb(0,0,0)";
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'red';
        context.fillText(message, mousePos.x, mousePos.y);
      }
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
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
        
        canvas.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(canvas, evt);
            var message = 'Mouse position: (X:) ' + mousePos.x + ', (Y:)' + mousePos.y;
            writeMessage(canvas, message, mousePos);
        }, false);        
        
       }
    }
 
