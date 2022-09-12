const checboxEl = document.querySelector('#toggle');
const paginationEl = document.querySelector('.tui-pagination');
const FORM_KEY = 'day-night';

savedTheme();

function savedTheme (){
	const savedTheme = JSON.parse(localStorage.getItem(FORM_KEY));
	if(!savedTheme){
		checboxEl.checked = !savedTheme;
		document.body.classList.add('dark-theme');

		paginationEl.classList.add('dark-theme');

	}
	 }

	 checboxEl.addEventListener('click', onChecboxClick);

function onChecboxClick(e) {
	if(checboxEl.checked){
		darkTheme();
		return
	}
	lightTheme();
}


function darkTheme (){
	localStorage.setItem(FORM_KEY, false);
	document.body.classList.add('dark-theme');
	paginationEl.classList.add('dark-theme');
	
}
function lightTheme(){
	localStorage.setItem(FORM_KEY, true)
	document.body.classList.remove('dark-theme');
	paginationEl.classList.remove('dark-theme');
}

