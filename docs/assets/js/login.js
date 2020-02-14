// login.js
var server = "http://localhost:8887/auth/login/";
console.log('login.js injected properly')

function wtb_login () {
	var email 		= document.getElementById('email').value;
	var password 	= document.getElementById('pass').value;

	var payload = {
		"email" : email,
		"password" : password
	}
	var xhttp = new XMLHttpRequest();

	console.log('about to send ', payload, 'to ', server)
	xhttp.open("POST", server, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
	
}