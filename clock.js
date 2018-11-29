var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

function time () {
	return h + " : " + m;
}

var clock = time();

document.getElementById("clock").innerText= clock; 



