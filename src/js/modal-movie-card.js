const openModal = document.querySelector('.gallery__list');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.js-backdrop');
const modalCard = document.querySelector('.modal-card');
let API_URL = 'https://api.themoviedb.org/3/';
let API_KEY = '70a1ccf907025a1a646b674d3a53bd64';

let id;
function openCardMovie(e) {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  id = Number(e.target.getAttribute('data-id'));
  modalCreateMark();
}
async function modalCreateMark() {
  let url = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      document
        .querySelector('.modal-card')
        .insertAdjacentHTML('afterbegin', createModal(movie));
    })
    .catch(error => console.log(error.message));
}

function createModal(movie) {
  modalCard.innerHTML = ' ';
  return `
  <div class="modal-card__img-wrapper">
      <img src="https://www.themoviedb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="lazyload" data-id=${movie.id} onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"/>
    </div>
    <div class="modal-card__film-desсriptoin">
      <h2 class="modal-card__film-title">${movie.title}</h2>
      <table class="modal-card__table">
        <tr>
          <td class="modal-card__table-refs">Vote / Votes</td>
          <td class="modal-card__table-value">
           <span class="modal__item-desc--orange">${movie.vote_average}</span>
           <span>/</span>
            <span class="modal__item-desc--grey">${movie.vote_count}</span>
          </td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Popularity</td>
          <td class="modal-card__table-value">${movie.popularity}</td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Original Title</td>
          <td class="modal-card__table-value">${movie.original_title}</td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Genre</td>
          <td class="modal-card__table-value">${movie.genres}</td>
        </tr>
      </table>
      <p class="modal-card__about">About</p>
      <p class="modal-card__description">
       ${movie.overview}
      </p>
      <div class="button__thumb">
  <div class="change-button__wrapper">
    <label>
      <input type="checkbox" name="watched" class="change-button__checkbox js-watched">
      <span type="button" class="change-button__button-on removeAddWatch">Remove from watched</span>
      <span type="button" class="change-button__button-off addWatch">Add to watched</span>
    </label>
  </div>
  <div class="change-button__wrapper">
    <label>
      <input type="checkbox" name="queue" class="change-button__checkbox js-queue">
      <span type="button" class="change-button__button-on removeQueue">Remove from queue</span>
      <span type="button" class="change-button__button-off addQueue">Add to queue</span>
    </label>
  </div>
</div>
    </div>
    `;
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

openModal.addEventListener('click', openCardMovie);
closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);
export { openCardMovie };