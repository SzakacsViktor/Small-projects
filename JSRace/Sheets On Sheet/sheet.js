function counting() {
	var A = 40;
	var B = 50;
	var a = document.getElementById("numA").value;
	var b = document.getElementById("numB").value;
	
	if (a <= A && b <= B) {
		alert((Math.floor(A / a) * Math.floor(B / b)) + " kisebb négyszög fér el a nagyon.");

		alert("Ha a lapot 90 fokban elforgatjuk, akkor " + (Math.floor(B / a) * Math.floor(A / b)) + " kisebb négyszög fér el a nagyon.");
	} else {alert(" A számok legyenek kisebbek a nagy lap méreteinél!");}
}

/*Adott egy 40cm X 50cm-es papírlap. A program kérjen be két kisebb méretet, és határozza meg, hogy hány darab ilyen kisebb méretű lapot lehet kivágni a nagy lapból. Számoljátok ki ugyanezt, ha a kis lapot elforgatjátok (az oldalak megcserélésével). Például 4X5-ös lapból 100-at lehet kivágni, de ha elforgatjuk 5X4-esre, akkor csak 96-ot*/
