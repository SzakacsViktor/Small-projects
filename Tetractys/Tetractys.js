var canvas = document.getElementById('myCanvas');
//var context = canvas.getContext('2d');

var x=250; // jobbra
var y=20; // lefelé
var a=100; // a az oldal hossza
var color='rgba(255,0,0,.7)';

function tetractys(x, y, a, color) {
  context.beginPath();
  context.fillStyle = color;
  context.moveTo(x, y);
  context.strokeStyle = color;
  context.lineTo(x - a / 2, y + (a * Math.sqrt(3) / 2));
  context.lineTo(x + a / 2, y + (a * Math.sqrt(3) / 2));
  context.lineTo(x, y);
  context.fill();
  context.stroke();
  return;
}

for (var i=1; i<=3; i++) {
  console.log('i ' + i);
  console.log('x ' + x);
  for (var j=1; j<=i; j++) {
    console.log('y ' + y);
    console.log('j ' + j);
    //color='red';
    callDrawFunction:
    tetractys(x, y, a, color);
    x+=102;
  }
  y+=90;
    switch (i) {
    case 1: x=198
      color='rgba(0,255,0,.7)';
      continue;
    case 2: x=146;
      color='rgba(0,0,255,.7)';
      //break;
  }
}
