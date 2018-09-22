function counting() {

  var numbers = new Array();
	var amount, multiplication;
	
	numbers[0] = parseFloat(document.getElementById('nmb1').value);
	numbers[1] = parseFloat(document.getElementById('nmb2').value);
	numbers[2] = parseFloat(document.getElementById('nmb3').value);
	numbers[3] = parseFloat(document.getElementById('nmb4').value);
	numbers[4] = parseFloat(document.getElementById('nmb5').value);

	amount = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
	multiplication = parseFloat(numbers[0] * numbers[1] * numbers[2] * numbers[3] * numbers[4]);

	//alert(numbers[2]);
	//alert(amount);
	//alert(multiplication);

	document.getElementById('result').innerHTML = ("A számok összege: " + amount + "<br>A számok szorzata: " + multiplication);

	return;
}

/*5.	Készítsetek egy programot, amely bekér 5 egész értéket. Ezeket tároljátok el egy tömbben. A program ezután jelenítse meg az értékek összegét és szorzatát*/
