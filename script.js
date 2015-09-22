// Question 1
function cellPhone(){
		document.write("Sample cell phone number: +97798********<br>");
		var cellNum = prompt("Enter cell phone number to check:");
		var start = /^(\+97798)([0-9]{8})$/; 		// Regular Expression that checks cell number.
		document.write("The cell number you entered is "+cellNum+"<br>");
		if(cellNum.match(start)){
			document.write("The cell number you entered is VALID.<br>");
		}
		else{
			document.write("The cell number you entered is INVALID.<br>");
		}
	}
	
// Question 2
function dName(){
		document.write("Sample domain name: <br><br>www.domainname.com<br>www.domainname.net<br>www.domainname.edu<br>domainname.com<br>domainname.net<br>domainname.edu<br>");
		var domainName = prompt("Enter domain name to be checked:");
		var domainCheck = /((w{3}).)?([a-z0-9\-])+((.com)|(.net)|(.edu))$/; 		
										// Regular Expression that checks domain name which ends with either .com, .net, .edu.
		document.write("You have entered "+domainName+"<br>");
		if(domainCheck.test(domainName)){
			document.write("You entered domain name is VALID.<br>");
		}
		else{
			document.write("You entered domain name is INVALID.br>");
		}
	}
	
// Question 3	
function checkString(){
		document.write("Sample string (must have A-Z, a-z, - or _):<br>");
		var stringName = prompt("Enter string to check containing A-Z, a-z, -, _:");
		var stringCheck = /((a-zA-Z)|_|-)/; 		 // Regular Expression that checks string consists of A-Z, a-z, - or _.
		document.write("You entered string is "+stringName+"<br>");
		if(stringCheck.test(stringName)){
			document.write("The string you entered is VALID.<br>");
		}
		else{
			document.write("The string you entered is INVALID.<br>");
		}
	}
	
// Question 4	
function checkDate(){
		document.write("Sample date: <br>mm/dd/yyyy<br>m/dd/yyyy<br>mm/d/yyyy<br>m/d/yyyy<br>");
		var dateEntered = prompt("Enter date to check:");
		var dateCheck = /^(1[0-2]|[1-9])\/([1-9]|[1-2][0-9]|3[0-2])\/([0-9]{4})$/  // Regular Expression that checks date.
		document.write("The date you entered is "+dateEntered+"<br>");
		if(dateCheck.test(dateEntered)){
			document.write("The date you entered is VALID.<br>");
		}
		else{
			document.write("The date you entered is INVALID.<br>");
		}
	}
	
// Question 5	
function checkTime(){
		document.write("Sample time: <br>hh:mm:ss<br>h:mm:ss<br>");
		var timeEntered = prompt("Enter time to check:");
		var timeCheck = /^(2[0-3]|1[0-9]|[0-9]):([0-9]|[1-5][0-9]):([0-9]|[1-5][0-9])$/;	// Regular Expression that checks time	.
		document.write("The time you entered is "+timeEntered+"<br>");
		if(timeCheck.test(timeEntered)){
			document.write("The time you entered is VALID.<br>");
		}
		else{
			document.write("The time you entered is INVALID.<br>");
		}
	}
	
// Question 6	
function hexColor(){
		document.write("Sample hex color: <br>#123456<br>#ABCDE<br>#abcd<br>#A1d<br>#12ABcd<br>");
		var hexEntered = prompt("Enter hex color value to be check:");
		var hexCheck = /^#([0-9]|[a-f]|[A-F]){1,6}$/;			// Regular Expression that checks hex color value.
		document.write("The hex color you entered is "+hexEntered+"<br>");
		if(hexCheck.test(hexEntered)){
			document.write("The hex color you entered is <b>VALID.</b>");
		}
		else{
			document.write("The hex color you entered is <b>INVALID.</b>");
		}
	}