var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var row = 500;
var col = 500;
var i;
var j;
var squareCounter = 1;

function drawCheckeredPattern(rowQuantity, colQuantity) {
  row = row / rowQuantity;
  col = col / colQuantity;

  for (i  = 0; i <= rowQuantity; i++) {
    for (j = 0; j <= colQuantity; j++) {
      if (squareCounter %2 !== 0) {
        context.fillRect(i * row, j * col, row, col);
      }
      squareCounter++;
      if (colQuantity == j && rowQuantity == i) {squareCounter++;}
    }
  }
}

var rowQuantity = prompt('Hány sor négyzet legyen?');
var colQuantity = prompt('Hány oszlop négyzet legyen?');
//var rowQuantity=7;
//var colQuantity=6;  //HA EZ PÁRATLAN, AKKOR NEM JÓ

drawCheckeredPattern(rowQuantity, colQuantity)
