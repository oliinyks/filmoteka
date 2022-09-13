import { gallery, paginationEl } from './data';
import { paginationSearch } from './pagination';
import { fetchSearchMovies } from './fetchSearchMovies';
import { enableLoader, disableLoader } from './loader';
import Notiflix from 'notiflix';
import { renderMovies } from './renderTrends';

let currentQuery = '';

const refs = {
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.some-input'),
  paginationSection: document.querySelector('.pagination'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(refs.searchInput.value.trim());

  if (refs.searchInput.value.trim() === '') {
    Notiflix.Notify.warning('Введите запрос');
    return;
  }

  if (refs.searchInput.value.trim() === currentQuery) {
    Notiflix.Notify.warning(
      'Результаты запроса уже показаны. Введите новый запрос'
    );
    return;
  }
  currentQuery = refs.searchInput.value.trim();

  enableLoader();
  // const page = paginationSearch.getCurrentPage();
  refs.paginationSection.classList.add('is-hidden');

  fetchSearchMovies(refs.searchInput.value, 1).then(
    ({ results: images, total_results: totalResults }) => {
      disableLoader();
      paginationSearch.on('afterMove', nextSearchedPage);
      refs.paginationSection.classList.remove('is-hidden');
      paginationSearch.reset(totalResults);
      console.log('paginationSearch reseted');
      renderMovies(images);
    }
  );

  gallery.innerHTML = '';
});

function nextSearchedPage(event) {
  gallery.innerHTML = '';
  const currentPage = event.page;
  fetchSearchMovies(refs.searchInput.value, currentPage).then(
    ({ results: images }) => {
      renderMovies(images);
    }
  );
}
