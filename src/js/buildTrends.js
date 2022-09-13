import { gallery, paginationEl } from './data';
import { paganation } from './pagination';
import { renderMovies } from './renderTrends';
import { fetchTrendFilms } from './fetchFilms';

const page = paganation.getCurrentPage();
paganation.on('afterMove', popular);

fetchTrendFilms(page).then(({ total_results: totalResults, results: images }) => {
  paginationEl.classList.remove('is-hidden');
  paganation.reset(totalResults);
  renderMovies(images);
});

function popular(event) {
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchTrendFilms(currentPage).then(({ results: images }) => {
    renderMovies(images);
  });
}
