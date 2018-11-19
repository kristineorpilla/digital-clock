var d = new Date();
var h = d.getHours();

console.log(d.getHours());

var m = d.getMinutes();

console.log(d.getMinutes());

function time(getHours, getMinutes) {
  getHours + " : " + getMinutes
}

console.log(time(getHours(), getMinutes()));