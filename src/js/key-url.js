export { API_URL, API_KEY };
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '70a1ccf907025a1a646b674d3a53bd64';

function findTrailer(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  ).then(respons => respons.json());
}
export { findTrailer };
