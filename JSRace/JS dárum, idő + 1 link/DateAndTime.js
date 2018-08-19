function clock() {

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
	var weekDay = date.getDay();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

	var clockFace = new String;
	var timeDiv = document.getElementById('exactTime');

	switch (month)
	{
			case 0: month = 'January'
			break;
		case 1: month = 'February'
			break;
		case 2: month = 'March'
			break;
		case 3: month = 'April'
			break;
		case 4: month = 'May'
			break;
		case 5: month = 'June'
			break;
		case 6: month = 'July'
			break;
		case 7: month = 'August'
			break;
		case 8: month = 'September'
			break;
		case 9: month = 'October'
			break;
		case 10: month = 'November'
			break;
		case 11: month = 'December'
			break;
		default: month = ''
	}

	switch (weekDay)
	{
		case 1: weekDay = 'Monday'
			break;
		case 2: weekDay = 'Tuesday'
			break;
		case 3: weekDay = 'Wednesday'
			break;
		case 4: weekDay = 'Thursday'
			break;
		case 5: weekDay = 'Friday'
			break;
		case 6: weekDay = 'Saturday'
			break;
		case 0: weekDay = 'Sunday'
			break;
		default: weekDay = ''
	}

	
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	

	clockFace = (year + '. ' + month + ' ' + day + '. ' + weekDay + '  ' + hours + ':' + minutes + ':' + seconds);

	document.getElementById('exactTime').innerHTML = clockFace;

  setTimeout(function () {
    clock();
	}, 1000);

}

function link () {
	document.getElementById('webLink').href = 	"https://codeberryschool.com/hu/";
	document.getElementById('webLink').target = "_blank"
	document.getElementById('webLink').innerText = "CodeBerry";
	clock();
}