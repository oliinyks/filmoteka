import { initializeApp } from 'firebase/app';
import { 
    getAuth ,
    signInWithEmailAndPassword ,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { refs } from './partials/refs';
import { onSucsessSignInAlert, onAuthVerified, onUnsubscribeAlert, onUnSignInAlert } from '../js/partials/alerts-auth';

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
            onAuthVerified();
            refs.container.classList.remove('right-panel-active');
        }
        else{
            onUnsubscribeAlert();
        }
    });
};

async function createAccount (){
    const loginEmail = refs.emailUp.value;
    const loginPassword = refs.passwordUp.value;
    
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    
};

async function loginWithEmilAndPassword(){
    const loginEmail = refs.emailIn.value;
    const loginPassword = refs.passwordIn.value;
    
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

    
    refs.logOutBtn.classList.remove('is-hidden');
};

async function logOut(){
    await signOut(auth);
    onUnSignInAlert();
   
    refs.logOutBtn.classList.add('is-hidden');
    refs.signInBtn.disabled = true;
};