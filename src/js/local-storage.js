
const removeQueue = document.querySelector('.removeQueue');
const AddQueue = document.querySelector('.addQueue');
const addWatch = document.querySelector('.addWatch');
const removeWatch = document.querySelector('.removeAddWatch');

const keyWatch = 'watchResults';
const keyQueue = 'queueResult';

const saveToStorage = (key, id) => {
  let storageResult = getFilmStorage(key);
  if (storageResult) {
    if (storageResult.length >= 1 && storageResult.find(item => item === id)) {
      return;
    }
    localStorage.setItem(key, JSON.stringify([...storageResult, id]));
  } else {
    localStorage.setItem(key, JSON.stringify([id]));
  }
};

const getFilmStorage = key => JSON.parse(localStorage.getItem(key));

const addStorage = (key, id) => {
  saveToStorage(key, id);
};

const removeStorage = (key, id) => {
  const arrayStorage = JSON.parse(localStorage.getItem(key));
  const filterId = arrayStorage.filter(item => item !== id);
  localStorage.setItem(key, JSON.stringify(filterId));
};

addWatch.addEventListener('click', () => addStorage(keyWatch, id));
removeWatch.addEventListener('click', () => removeStorage(keyWatch, id));
AddQueue.addEventListener('click', () => addStorage(keyQueue, id));
removeQueue.addEventListener('click', () => removeStorage(keyQueue, id));

export { saveToStorage, getFilmStorage, addStorage, removeStorage };
