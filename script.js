const face = document.getElementById('face');
const roupa = document.querySelector('.roupa');
const avatar = document.getElementById('avatar');
const musica = document.getElementById('musica');

function mudarExpressao(emoji) {
  face.textContent = emoji;

  face.classList.remove('emoji-animado');
  void face.offsetWidth;
  face.classList.add('emoji-animado');
}

function mudarRoupa(corClasse) {
  roupa.classList.remove('cor1', 'cor2', 'cor3');
  roupa.classList.add(corClasse);
}

function mudarTipoRoupa(tipoClasse) {
  roupa.classList.remove('tshirt', 'hoodie', 'dress');
  roupa.classList.add(tipoClasse);
}

function mudarPele(skinClasse) {
  // Seleciona as três partes do corpo que recebem o tom de pele
  const cabeca = document.querySelector('.cabeca');
  const corpo = document.querySelector('.corpo');
  const pernas = document.querySelector('.pernas');

  // Remove todas as classes de pele atuais e adiciona a nova
  ['skin1', 'skin2', 'skin3'].forEach(skin => {
    cabeca.classList.remove(skin);
    corpo.classList.remove(skin);
    pernas.classList.remove(skin);
  });

  cabeca.classList.add(skinClasse);
  corpo.classList.add(skinClasse);
  pernas.classList.add(skinClasse);
}

function salvarAvatar() {
  const estado = {
    face: face.textContent,
    roupa: [...roupa.classList],
    pele: [...avatar.classList]
  };
  localStorage.setItem('avatar', JSON.stringify(estado));
  alert('Avatar salvo!');
}

function carregarAvatar() {
  const dados = localStorage.getItem('avatar');
  if (dados) {
    const estado = JSON.parse(dados);
    face.textContent = estado.face;

    roupa.className = '';
    estado.roupa.forEach(c => roupa.classList.add(c));

    avatar.className = '';
    estado.pele.forEach(c => avatar.classList.add(c));
  }
}

function resetarAvatar() {
  localStorage.removeItem('avatar');
  location.reload();
}

function tocarMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// Carrega avatar salvo ao abrir a página
window.onload = carregarAvatar;

// Clique no rosto -> muda expressão para bravo 
face.addEventListener('click', () => {
  mudarExpressao('😠');
});
