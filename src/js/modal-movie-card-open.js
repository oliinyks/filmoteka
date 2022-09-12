import { modalCreateMarkup } from './modal-movie-card';
import { closeCardMovie, onEscKeyPress } from './modal-movie-card-close';
import { enableLoader } from './loader';
const openModal = document.querySelector('ul.gallery__list');

let id;
//Берем id с карточки по которой кликнули
function openCardMovie(e) {
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'H3'
  ) {
    id = Number(e.target.getAttribute('data-id'));
    enableLoader();
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscKeyPress);
    document.body.style.overflow = 'hidden';
    modalCreateMarkup();
  }
}
openModal.addEventListener('click', openCardMovie);

export { id, openCardMovie };
