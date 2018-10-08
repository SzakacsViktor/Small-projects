function fillForm() { //fetlölti véletlen számokkal az űrlapot
	
	for (var i = 0; i < 10; i++) {
		 document.getElementById("num" + i).value = (Math.floor(Math.random()*1000)+1);
	}
}


function orderNumbers() {
	
	var numbers = new Array;
	var biggest = 0
	
	document.getElementById("orderTxt").innerHTML = "A számok csökkenő sorrendben:";
	
	for (var i = 0; i < 10; i++) {	//tömbbe tárolja a számokat
		 numbers[i] = parseInt(document.getElementById("num" + i).value);
	}
	
	for (var j = 0; j < 10; j++) {
		for (var i = 0; i < 10; i++) { //csökkenő sorrendben kírja a számokat
				if (numbers[i] > numbers[biggest]) {
					biggest = i;
				}
			}
		document.getElementById("ordered" + j).innerHTML = numbers[biggest];
		numbers[biggest] = -1;				
	}
														
}
