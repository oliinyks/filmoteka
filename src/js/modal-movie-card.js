import { dataLocalStorage } from './local-storage';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';
//
const openModal = document.querySelector('ul.gallery__list');
const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.modal-movie-card__js-backdrop');
const modalCard = document.querySelector('.modal-movie-card');
//
let id;
//Берем id с карточки по которой кликнули
function openCardMovie(e) {
  console.log(e.target.nodeName);
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'H3'
  ) {
    id = Number(e.target.getAttribute('data-id'));
    document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEscKeyPress);
    document.body.style.overflow = 'hidden';
    modalCreateMark();
  }
}

//Запрос по id карточки на которую кликнули и рендерим разметку
async function modalCreateMark() {
  let url = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      // Жанры
      let genreMovieCard = [];
      let genresMovieCard = movie.genres.map(({ name }) => {
        genreMovieCard.push(name);
      });
      document
        .querySelector('.modal-movie-card')
        .insertAdjacentHTML('afterbegin', createModal(movie, genreMovieCard));
      dataLocalStorage(id);
    })
    .catch(error => console.log(error));
}
// Разметка
function createModal(movie, genreMovieCard) {
  modalCard.innerHTML = ``;
  return `
  <div class="modal-movie-card__img-wrapper">
      <img src="https://www.themoviedb.org/t/p/w500${movie.poster_path}" alt="${
    movie.title
  }" class="lazyload" data-id=${
    movie.id
  } onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"/>
    </div>
    <div class="modal-movie-card__film-desсriptoin">
      <h2 class="modal-movie-card__film-title">${movie.title}</h2>
      <table class="modal-movie-card__table">
        <tr>
          <td class="modal-movie-card__table-refs">Vote / Votes</td>
          <td class="modal-movie-card__table-value">
           <span class="modal-movie-card__item-desc--orange">${movie.vote_average.toFixed(
             1
           )}</span>
           <span>/</span>
            <span class="modal-movie-card__item-desc--grey">${
              movie.vote_count
            }</span>
          </td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Popularity</td>
          <td class="modal-movie-card__table-value">${movie.popularity.toFixed(
            1
          )}</td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Original Title</td>
          <td class="modal-movie-card__table-value">${movie.original_title}</td>
        </tr>
        <tr>
          <td class="modal-movie-card__table-refs">Genre</td>
          <td class="modal-movie-card__table-value">${genreMovieCard}</td>
        </tr>
      </table>
      <p class="modal-movie-card__about">About</p>
      <p class="modal-movie-card__description">
       ${movie.overview}
      </p>

<div class="modal-movie-card__button thumb">
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
    `;
}
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
openModal.addEventListener('click', openCardMovie);
closeModalBtn.addEventListener('click', closeCardMovie);
backdrop.addEventListener('click', backdropClickClose);
export { openCardMovie };
