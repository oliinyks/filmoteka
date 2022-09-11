import { gallery } from './data';

function renderTrandFilms(data) {
    gallery.innerHTML = '';
    const markup = data
      .map(
        ({ poster_path, title, id, genre_ids, release_date, vote_average }) => {
        return `<li class="gallery__item" data-id=${id}>
        <a href="/" class="gallery__link" data-id=${id}>
    <div class="gallery__wrapper" data-id=${id}>
    <span class="gallery__vote" data-id=${id}>${vote_average}</span>
        <img
            class="gallery__img"
            src="https://www.themoviedb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
            data-id=${id}
            onerror="this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
            >
    </div>
    <div class="gallery__thumb" data-id=${id}>
        <h3 class="gallery__name" data-id=${id}>${title}</h3>
        <p class="gallery__genres" data-id=${id}>${genre_ids}</p>
        <span class="gallery__year" data-id=${id}>${release_date ? release_date : 'n/a'}</span>
    </div>
    </a>
</li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export { renderTrandFilms };
