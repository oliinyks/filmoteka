const testArray = [
  {
    id: 299536,
    poster_path:
      'https://upload.wikimedia.org/wikipedia/ru/thumb/0/05/Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg/548px-Avengers-_Infinity_War_%28Original_Motion_Picture_Soundtrack%29.jpg',
    title: 'Avengers: Infinity War',
    genre_ids: [28, 12, 14, 878],
    vote_average: 8.3,
    vote_count: 20306,
    popularity: 173.039,
    overview:
      'When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.',
  },
];
const movieCard = document.querySelector('.modal-movie-card');
localStorage.setItem('testData', JSON.stringify(testArray));
let dataStorage = localStorage.getItem('testData');

dataStorage = JSON.parse(dataStorage);

function createGallary() {
  return dataStorage
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        vote_average,
        vote_count,
        popularity,
        overview,
      }) => {
        return `

    <div class="modal-card__img-wrapper">
      <img src="${poster_path}" alt="${title}" class="lazyload" />
    </div>
    <div class="modal-card__film-desсriptoin">
      <h3 class="modal-card__film-title">${title}</h3>
      <table class="modal-card__table">
        <tr>
          <td class="modal-card__table-refs">Vote / Votes</td>
          <td class="modal-card__table-value">
           <span class="modal__item-desc--orange">${vote_average}</span>
           <span>/</span>
            <span class="modal__item-desc--grey">${vote_count}</span>

          </td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Popularity</td>
          <td class="modal-card__table-value">${popularity}</td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Original Title</td>
          <td class="modal-card__table-value">${title}</td>
        </tr>
        <tr>
          <td class="modal-card__table-refs">Genre</td>
          <td class="modal-card__table-value">${genre_ids}</td>
        </tr>
      </table>
      <p class="modal-card__about">About</p>
      <p class="modal-card__description">
       ${overview}
      </p>
      <div class="modal-card__button-wrapper">
        <button class="modal-card__button add-to-watched" data-modal-watched>
          add to Watched
        </button>
        <button class="modal-card__button add-to-queue" data-modal-queue>
          add to queue
        </button>
      </div>
    </div>
    `;
      }
    )
    .join('');
}

const cardMarkup = createGallary(dataStorage);
movieCard.insertAdjacentHTML('beforeend', cardMarkup);
