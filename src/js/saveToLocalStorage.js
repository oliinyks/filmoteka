export { saveToStorage, getFilmStorage, selectAddDelete };

const saveToStorage = (key, filmdata) => {
    localStorage.setItem(key, JSON.stringify(filmdata));
};
const getFilmStorage = (key) => {
    const res = localStorage.getItem(key);
    return JSON.parse(res);
}

const selectAddDelete = (event, filmData) => {
	
    if (event.target.classList.contains('.btn-watch')) {
        addWatched(event, filmData);
    } else removeWatched(event, filmData);
	
    if (event.target.classList.contains('.btn-queue')) {
        addQueue(event, filmData);
    } else removeWatched(event, filmData);

    // рендер списка фильмов
};

	

	


