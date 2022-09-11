import { initializeApp } from 'firebase/app';
import { 
    getAuth ,
    signInWithEmailAndPassword ,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth";

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
};

const firebaseaApp = initializeApp({
    apiKey: "AIzaSyC3glTyFPgl_PxpXdEYgEDblCaNVPj-8ME",
    authDomain: "filmoteka-237d2.firebaseapp.com",
    projectId: "filmoteka-237d2",
    storageBucket: "filmoteka-237d2.appspot.com",
    messagingSenderId: "80338166565",
    appId: "1:80338166565:web:348dba35e1a955539d30cc"
});

const auth = getAuth(firebaseaApp);
const provider = new GoogleAuthProvider();
refs.signInSwitcher.addEventListener('click', ()=> {
    refs.container.classList.remove('right-panel-active');
});
refs.signUpSwitcher.addEventListener('click', ()=>{
    refs.container.classList.add('right-panel-active');
});

refs.firstForm.addEventListener('sumbit', (e)=> e.preventDefault());
refs.secondForm.addEventListener('submit', (e)=> e.preventDefault());

refs.signInBtn.addEventListener('click', loginWithEmilAndPassword);
refs.logOutBtn.addEventListener('click', logOut);
refs.signUpBtn.addEventListener('click', createAccount);

monitorAuthState();

async function monitorAuthState(){
    onAuthStateChanged(auth, user=>{
        if(user){
            console.log('Welcome', user);
        }
        else{
            console.log("You have no account yet");
        }
    });
};

async function logOut(){
    await signOut(auth);
};

async function createAccount (){
    const loginEmail = refs.emailUp.value;
    const loginPassword = refs.passwordUp.value;
    
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
};

async function loginWithEmilAndPassword(){
    const loginEmail = refs.emailIn.value;
    const loginPassword = refs.passwordIn.value;
    
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

    console.log(userCredential.user);
};