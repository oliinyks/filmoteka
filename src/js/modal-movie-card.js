import { dataLocalStorage } from './local-storage';
import { API_URL, API_KEY } from './key-url';
import { id, openCardMovie } from './modal-movie-card-open';
import { disableLoader } from './loader';
//
const modalCard = document.querySelector('.modal-movie-card');
//
async function modalCreateMarkup() {
  let url = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      let genreMovieCard = [];
      let genresMovieCard = movie.genres.map(({ name }) => {
        genreMovieCard.push(name);
      });
      modalCard.insertAdjacentHTML(
        'beforeend',
        createModal(movie, genreMovieCard)
      );
      dataLocalStorage(id);
    })
    .catch(error => console.log(error));
  disableLoader();
}
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

export { openCardMovie };
export { modalCreateMarkup };
