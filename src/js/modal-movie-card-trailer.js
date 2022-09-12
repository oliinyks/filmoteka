import { id, openCardMovie } from './modal-movie-card-open';
import { findTrailer } from './key-url';

const movieTrailer = () => {
  const trailerBtn = document.querySelector('.modal-movie-card__trailer');

  trailerBtn.addEventListener('click', function (e) {
    openTrailer(id);
  });
};

function openTrailer(id) {
  findTrailer(id)
    .then(data => {
      console.log(data);
      const key = data.results[0].key;
      const modal = basicLightbox.create(`
  <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<button class="close-modal__trailer">
     </button>`);
      modal.show();

      const closeBtn = document.querySelector('.close-modal__trailer');
      closeBtn.addEventListener('click', closeModal);
      function closeModal(e) {
        modal.close();
        window.removeEventListener('keydown', closeModalHandler);
      }
    })
    .catch(error => {
      const modal = basicLightbox.create(`
    <iframe width="860" height="615" src="https://www.youtube.com/embed/6DhiiFGk4_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);
      modal.show();
    });
}

export default movieTrailer;
