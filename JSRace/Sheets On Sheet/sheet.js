function counting() {
	var A = 40;
	var B = 50;
	
	var a =Math.floor(A / document.getElementById("numA").value);
	var b =Math.floor(B / document.getElementById("numB").value);
	
	alert((a * b) + " kisebb négyszög fér el a nagyon.");
	
	a =Math.floor(B / document.getElementById("numA").value);
	b =Math.floor(A / document.getElementById("numB").value);
	
	alert("Ha a lapot 90 fokban elforgatjuk, akkor " + (a * b) + " kisebb négyszög fér el a nagyon.");
	
}

/*Adott egy 40cm X 50cm-es papírlap. A program kérjen be két kisebb méretet, és határozza meg, hogy hány darab ilyen kisebb méretű lapot lehet kivágni a nagy lapból. Számoljátok ki ugyanezt, ha a kis lapot elforgatjátok (az oldalak megcserélésével). Például 4X5-ös lapból 100-at lehet kivágni, de ha elforgatjuk 5X4-esre, akkor csak 96-ot*/
