const checboxEl = document.querySelector('#toggle');
const paginationBtnEl = document.querySelector('.tui-page-btn')
const FORM_KEY = 'day-night';

savedTheme();

function savedTheme (){
	const savedTheme = JSON.parse(localStorage.getItem(FORM_KEY));
	if(!savedTheme){
		checboxEl.checked = !savedTheme;
		document.body.classList.add('dark-theme');
		// paginationBtnEl.body.classList.add('dark-theme');
		// footer.classList.add('dark-theme');
		// modal.classList.add('dark-theme');
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
	paginationBtnEl.body.classList.add('dark-theme');
	// footer.classList.add('dark-theme');
}
function lightTheme(){
	localStorage.setItem(FORM_KEY, true)
	document.body.classList.remove('dark-theme');
	paginationBtnEl.body.classList.remove('dark-theme');
	// footer.classList.remove('dark-theme');
}

