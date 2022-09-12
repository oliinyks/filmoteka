export {refs};

const refs={
    signInSwitcher: document.getElementById('signIn'),
    signUpSwitcher: document.getElementById('signUp'),
    firstForm: document.getElementById('formUp'),
    secondForm: document.getElementById('formIn'),
    container: document.querySelector('.container-auth'),
    emailUp: document.querySelector('[data-emailUp]'),
    passwordUp: document.querySelector('[data-passwordUp]'),
    emailIn: document.querySelector('[data-emailIn]'),
    passwordIn: document.querySelector('[data-passwordIn]'),
    logOutBtn: document.querySelector('[data-logOut]'),
    signInBtn: document.querySelector('[data-signIn]'),
    signUpBtn: document.querySelector('[data-signUp]'),
    backdrop: document.querySelector('[data-modal]'),
    headerSignInBtn: document.querySelector('[data-modal-open]'),
    modalCloseBtn: document.querySelector('[data-modal-close]'),
    leftModalCloseBtn: document.querySelector('[data-modal-close-left]'),
};