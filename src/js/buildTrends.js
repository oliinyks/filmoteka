import { gallery, paginationEl } from './data';
import { paganation } from './pagination';
import { renderTrandFilms } from './renderTrends';
import { fetchTrendFilms } from './fetchFilms';

const page = paganation.getCurrentPage();
paganation.on('afterMove', popular);

fetchTrendFilms(page).then(({ total_pages: totalPages, results: images }) => {
    paginationEl.classList.remove('visually-hidden');
    paganation.reset(totalPages);
    renderTrandFilms(images);
});


function popular(event) {
    gallery.innerHTML = '';
    const currentPage = event.page;
    fetchTrendFilms(currentPage).then(({ results: images }) => {
      renderTrandFilms(images);
    });
  }