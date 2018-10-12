function changePic(a) { //cseréli a nagy képet a kis képre, amire rákattintottak
	switch(a) {
		case "http://i.imgur.com/zW5Djxv.jpg":
			count = 0;
			break;
		case "http://i.imgur.com/xjnxvq8.jpg":
			count = 1;
			break;
		case "http://i.imgur.com/eV7ePNo.jpg":
			count = 2;
			break;
		case "http://i.imgur.com/yLZ3GKW.jpg":
			count = 3;
			break;
	}
	
	document.getElementById("bigPic").src = a;
}


function nextPic() { //a nagy képet cseréli a következőre, a kövi gomb hívja meg
	if (count == 3) {
		count = 0;
	} else {++count;}
	
	document.getElementById("bigPic").src = (pics[count]);
}


function prevPic() { //a nagy képet cseréli az elözőre	
	if (count == 0) {
		count = 3;
	} else {--count;}
	
	document.getElementById("bigPic").src = (pics[count]);
}