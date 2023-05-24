let i = 0;

let image = document.getElementById("sus");

function quebrar() {
  if (i >= 3) {
    image.src = "/img/quebrada.png";
  } else {
    i++;
  }
}

function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
