var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x; // jobbra
var y; // lefelé
var a; // az oldal hossza

function triangle(x, y, a) {
  context.beginPath();
  context.fillStyle = 'rgba(255, 255, 0, 0.5)';
  context.moveTo(x, y);
  context.strokeStyle = 'gray';
  context.lineTo(x - a / 2, y + (a * Math.sqrt(3) / 2));
  context.lineTo(x + a / 2, y + (a * Math.sqrt(3) / 2));
  context.lineTo(x, y);
  context.fill();
  context.stroke();
  return;
}

triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);
