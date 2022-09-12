const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.modal-movie-card__js-backdrop');

// При выходе забираем класс.
function closeCardMovie() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = '';
}
// Выход по backdrop
function backdropClickClose(e) {
  if (e.currentTarget === e.target) {
    closeCardMovie();
  }
}
// Выход по ESC
function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeCardMovie();
  }
}

closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);
export { closeCardMovie, onEscKeyPress };
