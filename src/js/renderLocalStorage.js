import { getGenres, getG } from './getGenres';

//============================тест
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

const btnWatch = document.querySelector(".button-watched") 
const btnQueue =document.querySelector (".button-queue") 
const galLibrary = document.querySelector(".library-list")


localStorage.setItem('watchRes', JSON.stringify(testWatch));
localStorage.setItem('queueRes', JSON.stringify(testQueue));

let dataW = localStorage.getItem('watchRes');
let dataQ = localStorage.getItem('queueRes');

dataW = JSON.parse(dataW);
console.log(dataW)
dataQ = JSON.parse(dataQ);
console.log(dataQ)



function renderLocalStorage(data) {
  // galLibrary.innerHTML = '';
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
  // galLibrary.insertAdjacentHTML('beforeend', markup);
}





// const qMarcup = renderLocalStorage(dataQ)
// btnQueue.addEventListener('submit', qMarcup)
// const wMarcup = renderLocalStorage(dataW)
// btnWatch.addEventListener('submit', wMarcup)