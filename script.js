const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancarFaixa = document.getElementById('proximo');
const botaoVoltarFaixa =  document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const tituloCapitulo = document.getElementById('titulo-capitulo');
const numeroCapitulos = 10;
let capituloAtual = 1;
let isPlaying = false;

function tocarFaixa () {
  audioCapitulo.play();
  isPlaying = true;
  mudarIconePlayPause();
}

function PausarFaixa () {
  audioCapitulo.pause();
  isPlaying = false;
  mudarIconePlayPause();
}

function mudarIconePlayPause () {
  botaoPlayPause.classList.toggle('bi-play-circle-fill');
  botaoPlayPause.classList.toggle('bi-pause-circle-fill');
}

function resetIconePlayPause () {
  botaoPlayPause.classList.add('bi-play-circle-fill');
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function avancarFaixa () {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
    
  } else {
    capituloAtual++;
  }

  audioCapitulo.src = `books/dom-casmurro/${capituloAtual}.mp3`;
  tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
  resetIconePlayPause();
  tocarFaixa();
}

function voltarFaixa () {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
    
  } else {
    capituloAtual--;
  }

  audioCapitulo.src = `books/dom-casmurro/${capituloAtual}.mp3`;
  tituloCapitulo.innerText = `Capítulo ${capituloAtual}`;
  resetIconePlayPause();
  tocarFaixa();
}

function PlayOrPause () {
  if (isPlaying === false) {
    tocarFaixa();
  } else {
    PausarFaixa();
  }
}

botaoPlayPause.addEventListener("click", PlayOrPause);
botaoAvancarFaixa.addEventListener("click", avancarFaixa);
botaoVoltarFaixa.addEventListener("click", voltarFaixa);