
import { getGenres, getG } from './getGenres';


const testWatch = [
  {
    id: 299536,
    poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    title: 'Avengers: Infinity War',
    genre_ids: [28, 12, 14, 878],
    release_date: '2018-04-25',
    vote_average: 8.3,
  },
  {
    id: 383498,
    poster_path: '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
    title: 'Deadpool 2',
    genre_ids: [28, 35, 878],
    release_date: '2018-05-15',
    vote_average: 7.6,
  },
]
const testQueue = [
  {
    id: 500664,
    poster_path: '/adOzdWS35KAo21r9R4BuFCkLer6.jpg',
    title: 'Upgrade',
    genre_ids: [28, 878, 53],
    release_date: '2018-06-01',
    vote_average: 7.6,
  },
];

localStorage.setItem('testWatch',JSON.stringify(testWatch))
localStorage.setItem('testQueue', JSON.stringify(testQueue))




const btnWatch = document.querySelector(".button-watched") 
const btnQueue =document.querySelector (".button-queue") 
const galLibrary = document.querySelector(".library-list")
const tecstLibr = document.querySelector(".libry-empty")

btnWatch.addEventListener('click', onBtnWatchClick);
btnQueue.addEventListener('click', onBtnQueueClick);


function onBtnWatchClick(e) {
  e.preventDefault(e);
  const savedMovie = JSON.parse(localStorage.getItem('testWatch')); // testWatch на watchResults
  console.log("🚀 ~ file: renderLocalStorage.js ~ line 69 ~ onBtnClick ~ savedMovie", savedMovie)
 renderLocalStorage(savedMovie)
}

function onBtnQueueClick(e) {
  e.preventDefault(e);
  const savedMovie = JSON.parse(localStorage.getItem('testQueue')); // testQueue на queueResult
	console.log("🚀 ~ file: renderLocalStorage.js ~ line 69 ~ onBtnClick ~ savedMovie", savedMovie)
	renderLocalStorage(savedMovie)
  
}

function renderLocalStorage(data) {
  tecstLibr.innerHTML = '';
  galLibrary.innerHTML = '';
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
  galLibrary.insertAdjacentHTML('beforeend', markup);
}
