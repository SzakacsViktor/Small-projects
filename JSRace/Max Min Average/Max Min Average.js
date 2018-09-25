function checkNumbers() {
	var a = parseInt(document.getElementById("numA").value);
	var b = parseInt(document.getElementById("numB").value);
	var c = parseInt(document.getElementById("numC").value);	
	
	//van-e küztük egyenlő
	if (a == b || a == c || c== b) {
		alert('Legyenek különbözőek!')
	}	else {
		
		//legnagyobb
		if (a > b && a > c) {
		alert(a + ' a legnagyobb.')
	} else if (b > a && b > c) {
		alert(b + ' a legnagyobb.')
	} else {alert(c + ' a legnagyobb.')}
		
		//legkisebb
		if (a < b && a < c) {
		alert(a + ' a legkisebb.')
	} else if (b < a && b < c) {
		alert(b + ' a legkisebb.')
	} else {alert(c + ' a legkisebb.')}
		
		//átlag
		alert(((a + b + c) / 3) + ' az átlaguk')
			
	}
}

/* Készítsetek egy programot, amely 3 bekért szám közül meghatározza a legnagyobbat, a legkisebbet, valamint az átlagukat is. */
