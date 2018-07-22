function draw() {
  
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");

  ctx.rect(200,200,200,200);
  ctx.stroke();
  
  /*ctx.translate(300, 300);
  ctx.rotate(45*Math.PI/180);
  ctx.rect(-100,-100,200,200);
  ctx.stroke();*/
  
  ctx.translate(300, 300);
  for (var i=1; i<60; i++) {
    ctx.rotate(i*6*Math.PI/180);
    ctx.rect(-100,-100,200,200);
    ctx.stroke();
} 
  
  
}


  

  