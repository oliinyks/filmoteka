const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';
const openModal = document.querySelector('.gallery__list');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.modal-movie-card__js-backdrop');
const modalCard = document.querySelector('.modal-movie-card');
//
let id = 550;
//Берем id с карточки по которой кликнули
function openCardMovie(e) {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  // id = Number(e.target.getAttribute('data-id'));
  modalCreateMark();
}
//Запрос по id карточки на которую кликнули и рендерим разметку
async function modalCreateMark() {
  let url = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      document
        .querySelector('.modal-movie-card')
        .insertAdjacentHTML('afterbegin', createModal(movie));
    })
    .catch(error => console.log(error.message));
}
// Разметка
function createModal(movie) {
  modalCard.innerHTML = ``;
  return `
  <div class="modal-movie-card__img-wrapper">
      <img src="https://www.themoviedb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="lazyload" data-id=${movie.id} onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"/>
    </div>
    <div class="modal-movie-card__film-desсriptoin">
      <h2 class="modal-movie-card__film-title">${movie.title}</h2>
      <table class="modal-movie-card__table">
        <tr>
          <td class="modal-movie-card__table-refs">Vote / Votes</td>
          <td class="modal-movie-card__table-value">
           <span class="modal-movie-card__item-desc--orange">${movie.vote_average}</span>
           <span>/</span>
            <span class="modal-movie-card__item-desc--grey">${movie.vote_count}</span>
          </td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Popularity</td>
          <td class="modal-movie-card__table-value">${movie.popularity}</td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Original Title</td>
          <td class="modal-movie-card__table-value">${movie.original_title}</td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Genre</td>
          <td class="modal-movie-card__table-value">${movie.genres}</td>
        </tr>
      </table>
      <p class="modal-movie-card__about">About</p>
      <p class="modal-movie-card__description">
       ${movie.overview}
      </p>
      <div class="modal-movie-card__button-wrapper">
        <button class="modal-movie-card__button add-to-watched" data-modal-watched>
          add to Watched
        </button>
        <button class="modal-movie-card__button add-to-queue" data-modal-queue>
          add to queue
        </button>
      </div>
    </div>
    `;
}
// При выходе забираем класс.
function closeCardMovie() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
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

openModal.addEventListener('click', openCardMovie);
closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);
export { openCardMovie };