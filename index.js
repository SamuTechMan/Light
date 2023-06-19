let i = 0;

let image = document.getElementById("sus");
let image1 = document.getElementById("tittle");
function quebrar() {
  if (i >= 3) {
    image.src = "/img/quebrada.png";
    document.querySelector('button[onclick="apagar()"]').disabled = true;
    document.querySelector('button[onclick="acender()"]').disabled = true;
    document.querySelector('button[onclick="darkFunction()"]').disabled = true;
    document.querySelector('button[onclick="acender()"]').disabled = true;
  } else {
    i++;
  }
}

function acender() {
  element = document.getElementById("sus");
  element = image.src = "img/acesa.png";
}

function apagar() {
  element = document.getElementById("sus");
  element = image.src = "img/apagada.png";
}

function resetar() {
  let botoes = document.querySelectorAll(".button");
  botoes.forEach((botao) => {
    botao.disabled = false;
  });
  i = 0;
  image.src = "img/apagada.png";
}

function darkFunction() {
  if (image1.src.includes("interruptorDesligado.png")) {
    image1.src = "img/interruptorligado.png";
    image1.style.width = "200px";
    image1.style.height = "200px";
  } else {
    image1.src = "img/interruptorDesligado.png";
    image1.style.width = "220px";
    image1.style.height = "220px";
  }
  var element = document.body;
  element.classList.toggle("dark-mode");
}
