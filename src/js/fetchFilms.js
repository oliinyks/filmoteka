
import axios from 'axios';
console.log('Hi');
const BASE_URL = 'https://api.themoviedb.org/3/';
const URL_PARAMS = 'trending/movie/week'
const KEY = '0bc2fc25d49086a05a6d0c82a07701b2';

export default async function fetchMovie(query = '', page = 1) {
  const PARAMS = new URLSearchParams({ api_key: KEY, page, query });
  try {
    const response = await axios.get(`${BASE_URL}${URL_PARAMS}?${PARAMS}`);
    return response.data;
  }
  catch (error) {
      console.log(error);
  }
};