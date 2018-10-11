//MOTORINDÍTÓ FÜGGVÉNY
//Elindítja a motort, ha van üzemanyag. A indítás gomb hívja meg.
function start() {
	if (fuel >= 1) {
		gear = 0;
		rpm = 900;
		speed = 0;
		engin = true;
		consumption();
	} else {alert("Nincs üzemanyag. Indulás előtt tankolj!");}
}

//MOTORLEÁLLÍTÓ FÜGGVÉNY
//Leállítja a motort. A leállítás gomb hívja meg, vagy a fogyasztásmérő függvény, ha kifogyott a nafta.
function stop() {
	gear = 0;
	rpm = 0;
	speed = 0;
	engin = false;
}

//GÁZPEDÁL FÜGGVÉNY
//10-zel növeli vagy csökkenti a sebességet, ha a fokozat és a fordulatszám engedi. Gázadás / Gázelvétel gomb hívja meg.
function accelerator(change) {
	if (change == true) { //gyorsít
		speed = speed + 10;
	} else { //lassít
		speed = speed - 10;
	}
	
}

//SEBESSÉGVÁLTÓ FÜGGVÉNY
//Növeli vagy csökkenit a sebességfokozatot, ha az lehetséges. Váltás felfelé / Váltás lefelé gomb hívja meg
function shift(change) {
	if (change == true) { //felvált, ha tud
		if (gear < 5) {
			++gear;
		} else {alert("Nincs több fokozat felfelé.");}
	} else { //levált, ha tud
		if (gear > 0) {
			--gear;
		} else {alert("Nincs több fokozat lefelé.");}
	}
	
}

//TANKOLÁS FÜGGVÉNY
//10 litert tankol, ha nem jár a motor. 50 liter fér a tankba. A tankolás gomb hívja meg.
function fueling() {
	if (rpm == 0) {
		fuel = fuel +10;
		if (fuel > 50) {fuel = 50;}
		document.getElementById("fuel").innerHTML = (fuel + " liter");
	} else {alert("Tankolás előtt álitsd le a motort!");}

}

//FOGYASZTÁSMÉRŐ FÜGGVÉNY
//A fordulatszám és az idő függvényében csökkenti az üzemanyag szintet. A motorindító függvény hívja meg.
function consumption() {
	x = x + rpm;
	if (x >= 100000) {
		--fuel;
		x = 0;
		if (fuel == 0) { //megáll ha elfogy az üzemanyag
			document.getElementById("speed").innerHTML = (" --- ");
			document.getElementById("rpm").innerHTML = (" --- ");
			document.getElementById("gear").innerHTML = (" --- ");
			document.getElementById("fuel").innerHTML = (" --- ");
			stop()
		}
	}
	//frissíti a változók értékét és kiírja
	switch(gear) {
		case 0:
			speed = 0;
			if (engin == true) {
				rpm = 900;
			} else {rpm = 0;}
			
			break;
		case 1:
			if (speed < 6) {speed = 6} else {
				if (speed > 47) {speed = 47} else {
					rpm = speed * 137;
					}
				}
			break;
		case 2:
			if (speed < 12) {speed = 12} else {
				if (speed > 85) {speed = 85} else {
					rpm = speed * 76.8;
					}
				}
			break;
		case 3:
			if (speed < 19) {speed = 19} else {
				if (speed > 133) {speed = 133} else {
					rpm = speed * 48.8;
					}
				}
			break;
		case 4:
			if (speed < 26) {speed = 26} else {
				if (speed > 184) {speed = 184} else {
					rpm = speed * 35.2;
					}
				}
			break;
		case 5:
			if (speed < 33) {speed = 33} else {
				if (speed > 237) {speed = 237} else {
					rpm = speed * 27.4;
					}
				}
			break;
	}
	distance = distance + (speed * 0.28);
	document.getElementById("speed").innerHTML = (parseInt(speed) + " kilométer / óra");
	document.getElementById("rpm").innerHTML = (parseInt(rpm) + " fordulat / perc");
	if (gear == 0) {
		document.getElementById("gear").innerHTML = "Üresben";
	} else {
		document.getElementById("gear").innerHTML = (gear + ". fokozat");
	}	
	document.getElementById("fuel").innerHTML = (fuel + " liter");
	document.getElementById("way").innerHTML =("Megtett távolság: " + (parseInt(distance) + " méter"));
	
	setTimeout("consumption()", 1000);
}
