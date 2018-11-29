var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

function add0(num) {
	if (num < 10) {
		return num= "0" + num;
	}
	else {
		return num;
	}
}


function time() {
  document.getElementById("clock").innerText = h + " : " + m;
}

setInterval(time, 0);

