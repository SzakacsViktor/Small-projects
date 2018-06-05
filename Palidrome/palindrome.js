function teszt() {

var palindrome=(document.beker.palindrome.value);

var back=new String();

　

for (var count=palindrome.length-1; count >=0; count--) {

back=back+palindrome.charAt(count);

}

　

palindrome=palindrome.toLowerCase();

back=back.toLowerCase();

　

if (back==palindrome) {

document.getElementById('keret1').innerHTML ='Yes! It is a palindrome.';

} else {

document.getElementById('keret1').innerHTML ='No! It is NOT a palindrome.<br>';

}

}