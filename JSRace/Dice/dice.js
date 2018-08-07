function dice() {
  
  var randomPic = new Array('diceOne.png','diceTwo.png','diceThree.png','diceFour.png','diceFive.png', 'diceSix.png');
  
  document.getElementById('dicePic').src=randomPic[Math.floor(Math.random()*6)];
}