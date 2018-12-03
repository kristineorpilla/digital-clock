function time() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();

  var x = "AM"; 

  x = apm(h, x);
  h = zero(change(midnight(h)));
  m = zero(m);


  document.getElementById("clock").innerText = h + " : " + m + " " + x;
}

setInterval(time, 0);

function zero(n) {
  if (n < 10) {
    return n = "0" + n;
  }
  else {
    return n = n;
  }
}

function change(h) {
  if (h >= 13) {
    return h = h - 12;
  }
  else {
    return h = h;
  }
}

function apm(h, x) {
  if (h > 11) {
    return x = "PM";
  }
  else {
    return x = "AM";
  }
}

function midnight(h) {
  if (h === 0) {
    return h = 12;
  }
  else {
    return h = h;
  }
}