// Corações animados
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.fontSize = Math.random() * 20 + 10 + 'px';
    coracao.innerText = '❤️';

    const container = document.querySelector('.coracoes');
    container.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);

// Carrossel
const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg", "foto6.jpg", "foto7.jpg"];
let index = 0;

const foto = document.getElementById('foto');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
    index = (index - 1 + fotos.length) % fotos.length;
    foto.src = fotos[index];
});

next.addEventListener('click', () => {
    index = (index + 1) % fotos.length;
    foto.src = fotos[index];
});

// Música de fundo
window.addEventListener('click', () => {
    const musica = document.getElementById('musica');
    if (musica.paused) {
        musica.play().catch(() => {
            // navegador bloqueou
        });
    }
}, { once: true });
