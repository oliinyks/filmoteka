const closeModalBtn = document.querySelector('[data-modal-movie-card-close]');
const backdrop = document.querySelector('.modal-movie-card__js-backdrop');
function closeCardMovie() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = '';
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
closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);
export { closeCardMovie, onEscKeyPress };
