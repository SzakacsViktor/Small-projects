function


function draw() {
  
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var i=1, l=0;
var colors=new Array ("grey", "black", "grey", "white");
var colo="gray";

/*ctx.rect(200,200,200,200);
ctx.stroke();*/

/*ctx.translate(300, 300);
ctx.rotate(45*Math.PI/180);
ctx.rect(-100,-100,200,200);
ctx.stroke();*/

ctx.translate(300, 300);
setInterval(function(){
  ctx.rotate(i*3*Math.PI/180);
  ctx.rect(-200,-200,400,400);
  ctx.strokeStyle = colors[l];
  ctx.stroke();
  i++;
  if (i%9==0) {l++};
  if (l>3) {l=0}}
, 300);
      
  
}