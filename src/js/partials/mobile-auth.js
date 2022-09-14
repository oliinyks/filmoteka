const refs = {
    thumb: document.querySelector('[data-thumb]'),
    mobileSignInForm: document.querySelector('[data-mobile-signIn]'),
    mobileSignUpForm: document.querySelector('.mobile-auth'),
    signUpMobileBtn: document.querySelector('[data-signUpMobile]'),
    signInMobileBtn: document.querySelector('[data-signInMobile]'),
    signUpSecondFormBtn:document.querySelector('[data-signUpMobileSecondForm]'),

}


refs.signInMobileBtn.addEventListener('click', onSignInMobileBtnClick);
refs.signUpSecondFormBtn.addEventListener('click', onsignUpSecondFormBtnClick);

// нужно сделать что-бы при нажатии на sign In вешался класс thumb-active, и снимался класс sign-up-active
function onSignInMobileBtnClick(){
    refs.thumb.classList.add('active-thumb');
    refs.mobileSignUpForm.classList.add('sign-up-active');
    refs.mobileSignInForm.classList.remove('sign-up-active');
    
};
function onsignUpSecondFormBtnClick(){
    refs.mobileSignUpForm.classList.remove('sign-up-active');
    refs.thumb.classList.remove('active-thumb');
    refs.mobileSignInForm.classList.add('sign-up-active');
};