const carrossel = document.getElementById('carrossel');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');

function atualizarCarrossel() {
  const larguraImagem = carrossel.clientWidth;
  carrossel.style.transform = `translateX(-${indice * larguraImagem}px)`;
}

proximo.addEventListener('click', () => {
  if (indice < carrossel.children.length - 1) {
    indice++;
  } else {
    indice = 0;
  }
  atualizarCarrossel();
});

anterior.addEventListener('click', () => {
  if (indice > 0) {
    indice--;
  } else {
    indice = carrossel.children.length - 1;
  }
  atualizarCarrossel();
});

window.addEventListener('resize', atualizarCarrossel);