import { refs } from './refs';

refs.signInSwitcher.addEventListener('click', ()=> {
    refs.container.classList.remove('right-panel-active');
});
refs.signUpSwitcher.addEventListener('click', ()=>{
    refs.container.classList.add('right-panel-active');
});

refs.headerSignInBtn.addEventListener("click", toggleModal);
refs.modalCloseBtn.addEventListener("click", toggleModal);
refs.leftModalCloseBtn.addEventListener('click', toggleModal);

refs.firstForm.addEventListener('sumbit', (e)=> e.preventDefault());
refs.secondForm.addEventListener('submit', (e)=> e.preventDefault());

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
};