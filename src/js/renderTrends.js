import { gallery } from './data';
import { getGenres, getG } from './getGenres';

function renderTrandFilms(data) {
    gallery.innerHTML = '';
    const markup = data
      .map(
        ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        const getNames = getGenres(genre_ids);
        const year = parseInt(release_date);
        // const rating = vote_average.toFixed(1);
        return `<li class="gallery__item movie-card" data-id=${id}>
        <a href="#" class="gallery__link movie-card__link link" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    
        <img
            class="gallery__img movie-card__image"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
            data-id=${id}
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
            >
    </div>
    <div class="gallery__thumb movie-card__info" data-id=${id}>
        <h3 class="gallery__name movie-card__title" data-id=${id}>${title}</h3>
        <p class="gallery__genres movie-card__genre" data-id=${id}>${getNames}</p>
        <span class="gallery__year movie-card__year" data-id=${id}>${year ? year : 'n/a'}</span>
    </div>
    </a>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export { renderTrandFilms };



// <span class="gallery__vote" data-id=${id}>${rating}</span>