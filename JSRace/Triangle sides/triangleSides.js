function counting() {
	var a = parseFloat(document.getElementById("numA").value);
	var b = parseFloat(document.getElementById("numB").value);
	var c = parseFloat(document.getElementById("numC").value);
	
	if ((a + b) <= c || (a + c) <= b  || (b + c) <= a) {
		alert("A háromszög minden oldalának rövidebbnek kell lennie a másik kettő összegénél. Írj be ennek megfelelő számokat!")
	} else {
		var halfDistrict = (a + b + c) / 2;
		var result = "Az első oldal " + (halfDistrict - a) + " miliméterrel kisebb a kerület felénél.  A második oldal " + (halfDistrict - b) + " miliméterrel kisebb a kerület felénél.  A harmadik oldal " + (halfDistrict - c) + " miliméterrel kisebb a kerület felénél.";
		alert(result);
		//alert("A második oldal " + (halfDistrict - b) + " miliméterrel kisebb a kerület felénél.");
		//alert("A harmadik oldal " + (halfDistrict - c) + " miliméterrel kisebb a kerület felénél.");
	}
}

/*	Olvassátok be egy háromszög oldalainak hosszát, majd mindhárom oldalhoz határozzátok meg, hogy mennyivel kisebb a kerület felénél. */
