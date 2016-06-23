
    var canvas, ctx;
 
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
        
        
        //Draw a rectangle
        ctx.strokeStyle="#FF0000";
        ctx.strokeRect(20,20,150,100);
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 75;
        var startAngle = 0;//1.1 * Math.PI;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;

        //Draw a circle
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        ctx.lineWidth = 15;        
        ctx.strokeStyle = 'green';
        ctx.stroke();        
        
        //Draw a line
        ctx.beginPath();
        ctx.moveTo(10, 200);
        ctx.lineTo(400, 200);
        ctx.strokeStyle="#0000FF";
        ctx.lineWidth = 15;
        ctx.stroke();
        
       }
    }
 
