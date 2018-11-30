function time() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
    if (m < 10){ 
     m = "0" + m;
  }
  document.getElementById("clock").innerText = h + " : " + m;
}

setInterval(time, 0);