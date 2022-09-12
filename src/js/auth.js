import { initializeApp } from 'firebase/app';
import { 
    getAuth ,
    signInWithEmailAndPassword ,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth";
import { Notify } from 'notiflix';
import { refs } from './partials/refs';

const optionsNotify = {
    position: 'center-top',
    timeout: 2000, 
    cssAnimationStyle: 'from-top',
    fontAwesomeIconStyle: 'shadow',
}

refs.signInBtn.addEventListener('click', loginWithEmilAndPassword);
refs.logOutBtn.addEventListener('click', logOut);
refs.signUpBtn.addEventListener('click', createAccount);

const firebaseaApp = initializeApp({
    apiKey: "AIzaSyC3glTyFPgl_PxpXdEYgEDblCaNVPj-8ME",
    authDomain: "filmoteka-237d2.firebaseapp.com",
    projectId: "filmoteka-237d2",
    storageBucket: "filmoteka-237d2.appspot.com",
    messagingSenderId: "80338166565",
    appId: "1:80338166565:web:348dba35e1a955539d30cc"
});

const auth = getAuth(firebaseaApp);

monitorAuthState();

async function monitorAuthState(){
    onAuthStateChanged(auth, user=>{
        if(user){
            onSucsessAlert();
        }
        else{
           Notify.info('You have no account yet! Sign up firstly.', optionsNotify);
        }
    });
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

async function logOut(){
    await signOut(auth);
};

function onSucsessAlert(){
    Notify.success(`Welcome! What's today, adventure, or maybe sci-fi?`, optionsNotify);
};