const tanah = document.querySelectorAll('.tanah');
const tangan = document.querySelectorAll('.tangan');
const papanskor = document.querySelector('.papan-skor');
const slash = document.querySelector('#slash');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanTangan() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanTangan();
    }
  }, wRandom);
}

function play() {
  selesai = false;
  skor = 0;
  papanskor.textContent = 0;
  munculkanTangan();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  slash.play();
  papanskor.textContent = skor;
}

tangan.forEach((t) => {
  t.addEventListener('click', pukul);
});
