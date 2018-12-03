function time() {
  var d = new Date(2018, 11, 24, 0, 59, 30, 0);
  var h = d.getHours();
  var m = d.getMinutes();

  var x = "AM"; 

  h = midnight(h);
  x = apm(h, x);
  h = zero(change(h));
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
  if (h > 12) {
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
  if (h = 0) {
    return h = "12";
  }
  else {
    return h = h;
  }
}