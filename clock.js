var d = new Date();
var h = d.getHours();
var m = d.getMinutes();

function time() {
  document.getElementById("clock").innerText = h + " : " + m;
}

setInterval(time, 0);

