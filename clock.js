function time() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  if (m < 10){ 
  	m = "0" + m;
  }
  else {
  	m = m;
  }
  if (h < 10) {
  	h = "0" + h;
  }
  else {
  	h = h;
  }
  document.getElementById("clock").innerText = h + " : " + m;
}

setInterval(time, 0);

// function bgchange (background, frames) {
//   var background = 1;

//   function change() {
//     document.getElementById = 
//   }
// }