let i = 0;

let image = document.getElementById("sus");

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
  element = image.src = "/img/acesa.png";
}

function apagar() {
  element = document.getElementById("sus");
  element = image.src = "/img/apagada.png";
}

function resetar() {
  let botoes = document.querySelectorAll(".button");
  botoes.forEach((botao) => {
    botao.disabled = false;
  });
  i = 0;
  image.src = "/img/apagada.png";
}

function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
