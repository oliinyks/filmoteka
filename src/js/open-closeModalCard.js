const openModal = document.querySelector('.movie-card');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.js-backdrop');

openModal.addEventListener('click', openCardMovie);
closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);

function openCardMovie() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
}
function closeCardMovie() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
}
function backdropClickClose(e) {
  if (e.currentTarget === e.target) {
    closeCardMovie();
  }
}
function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeCardMovie();
  }
}
