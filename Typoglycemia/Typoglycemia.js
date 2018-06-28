//this is the main mispell funciton
//it will call kever() if misspell is possible
function misspell() {
var sentence=(document.beker.sentence.value);

if (sentence.length>3) {
  var typoglycemia=new String();
  var spaces=new Array();
  var spcs, i, j;
  var word=new String();

  //this SUBfunction is misspelles ONE word
  function kever(from, to) { //                       BIGINING OF KEVER
    var randomNumber;
    var count=0;
    var mispelledWord=new String();

    word=sentence.slice(from+1, to-1);

    do {
      do {
        randomNumber=(Math.round(Math.random()*(word.length- count)+1))-1;
      } while (word.charAt(randomNumber)=='');
      mispelledWord=mispelledWord+word.charAt(randomNumber);
      word=word.replace(word.charAt(randomNumber),'');
      count++;
    } while (word.length!==0);

    sentence=sentence.replace(sentence.slice(from+1, to-1), mispelledWord);
  } //                                                END OF KEVER

//this loop is searches spaces position in the sentence
//result in spaces()
for (i=0; i<sentence.length; i++) {
  if (sentence.charCodeAt(i)=='32') {
    spcs=spaces.push(i);
  }
}

//check if the word can be misspelled
if (spaces.length>0) {
  for (i=0; i<=spaces.length; i++) {
  switch (i) {
    case 0:
      if (spaces[i]>3) {kever(0,spaces[i]);}
      break;
    case spaces.length:
      kever(spaces[i-1]+1,sentence.length);
      break;
    default:
      if (spaces[i]-spaces[i-1]>3) {kever(spaces[i-1]+1,spaces[i])}
      break;}
}} else {typoglycemia=kever(0,sentence.length)}

document.write('<br>',sentence,'<br>');

//display the misspelled sentence
document.getElementById('keret1').innerHTML ='Misspelled text:  ',sentence;
} else document.getElementById('keret1').innerHTML ='Plese enter at least 4 characters<br><a href="javascript:location.reload(true)">Try again!</a>',sentence;
}