function counting() {
	var min = parseInt(document.getElementById("numA").value);
	var max = parseInt(document.getElementById("numB").value);
	var randomNums = new Array;
	
	if (max <= 0 || min <= 0) {
		alert('POZITÍV legyen!');
	} else {
		if (min >= max) {
			alert('A minimum legyen KISEBB a maximumnál!');
		} else {
	if (max - min <5) {
		alert('A kettő között legalább ÖT legyen a különbség!');
	} else {
		
		var sum = 0;
		for (var i = 0; i <= 19; i++) {
			randomNums[i]=Math.round(Math.random()*(max - min)) + min;
			sum = sum + randomNums[i];
		}
		var randomNumsString = randomNums.join(', ');
		alert('A következő számokat dobta a gép: ' + randomNumsString);
		alert('Átlaguk: ' + (sum / 20));
		alert('Az összegük pedig: ' + sum);
		
		}
	}
	}
	}

/*	Készítsetek egy programot, amely egy 20 elemű tömböt feltölt véletlen számokkal. Jelenítsétek meg a generált számokat, majd az összegüket is. */
