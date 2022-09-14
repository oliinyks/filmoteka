

const dataLocalStorage = (movie) => {
  const removeQueue = document.querySelector('.removeQueue');
  const addQueue = document.querySelector('.addQueue');
  const addWatch = document.querySelector('.addWatch');
  const removeWatch = document.querySelector('.removeAddWatch');
  const inputWatch = document.querySelector('.js-watched');
  const inputQueue = document.querySelector('.js-queue');

  
  const keyWatch = 'watchResults';
  const keyQueue = 'queueResult';

  const getFilmStorage = (key) => JSON.parse(localStorage.getItem(key));


  const saveToStorage = (key, movie) => {
    let storageResult = getFilmStorage(key);
    if (storageResult) {
      if (
        storageResult.length >= 1 &&
        storageResult.find(item => item.id === movie.id)
      ) {
        return;
      }
      localStorage.setItem(key, JSON.stringify([...storageResult, movie]));
    } else {
      localStorage.setItem(key, JSON.stringify([movie]));
    }
  };

  const removeStorage = (key, movie) => {
    const arrayStorage = JSON.parse(localStorage.getItem(key));
    const filterId = arrayStorage.filter(item => item.id !== movie.id);
    localStorage.setItem(key, JSON.stringify(filterId));
   };

  // Проверка
  // Если в localStorage есть данные и они равны id, то кнопки в модалке не ресетятся
  const watchedResults = getFilmStorage(keyWatch);
  const checkWatchedStorage = watchedResults?.some(item => item.id === movie.id);
  const queueResults = getFilmStorage(keyQueue);
  const checkQueuedStorage = queueResults?.some(item => item.id === movie.id);

  if (checkWatchedStorage) {
    inputWatch.setAttribute('checked', '');
  }
  if (checkQueuedStorage) {
    inputQueue.setAttribute('checked', '');
  }

    addWatch.addEventListener('click', () => saveToStorage(keyWatch, movie));
    removeWatch.addEventListener('click', () => removeStorage(keyWatch, movie));
  
    addQueue.addEventListener('click', () => saveToStorage(keyQueue, movie));
    removeQueue.addEventListener('click', () => removeStorage(keyQueue, movie));
  
};

export { dataLocalStorage };
