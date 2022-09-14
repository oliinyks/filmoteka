import { modalCreateMarkup } from './modal-movie-card';
import { closeCardMovie, onEscKeyPress } from './modal-movie-card-close';
import { enableLoader } from './loader';
const openModal = document.querySelector('[data-modal-movie-card-open]');

let id;
function openCardMovie(e) {
  id = Number(e.target.getAttribute('data-id'));
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'H3'
  ) {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  document.body.style.overflow = 'hidden';
    modalCreateMarkup();
      enableLoader();
  }
}
openModal.addEventListener('click', openCardMovie);
export { id, openCardMovie };
