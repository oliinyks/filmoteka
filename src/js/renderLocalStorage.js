console.log('HI');
const testArray = [
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
  {
    id: 500664,
    poster_path: '/adOzdWS35KAo21r9R4BuFCkLer6.jpg',
    title: 'Upgrade',
    genre_ids: [28, 878, 53],
    release_date: '2018-06-01',
    vote_average: 7.6,
  },
];

const movieCard = document.querySelector('.movies-cardset');
const section = document.getElementById('myLibrary');

// section.innerHTML = ''

localStorage.setItem('testData', JSON.stringify(testArray));
let dataStorage = localStorage.getItem('testData');

dataStorage = JSON.parse(dataStorage);

function createGallary() {
  return dataStorage
    .map(({ poster_path, title, genre_ids, vote_average, release_date }) => {
      return `
     <li class="movie-card">
        <a href="#" class="movie-card__link link">
            <img src="${poster_path}" width="395" height="574" alt="${title}" class="movie-card__image">
            <h3 class="movie-card__title">${title}</h3>
            <div class="movie-card__info">
                <span class="movie-card__genre">${genre_ids}</span>
            |
            <span class="movie-card__year">${release_date}</span>
            <span class="movie-card__rate">${vote_average}</span>
            </div>
        </a>
        </li>
    `;
    })
    .join('');
}

const cardMarkup = createGallary(dataStorage);
movieCard.insertAdjacentHTML('beforeend', cardMarkup);
