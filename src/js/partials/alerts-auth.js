import { Notify } from 'notiflix';
export { onSucsessSignInAlert, onAuthVerified, onUnsubscribeAlert, onUnSignInAlert };

const optionsNotify = {
    position: 'center-top',
    timeout: 2000, 
    cssAnimationStyle: 'from-top',
    fontAwesomeIconStyle: 'shadow',
}

function onSucsessSignInAlert(){
    Notify.success(`Welcome! What's today, adventure, or maybe sci-fi?`, optionsNotify);
};
function onAuthVerified(){
    Notify.success(`Welcome! Lets get started`, optionsNotify);
};
function onUnsubscribeAlert(){
    Notify.info('You have no account yet! Sign up firstly.', optionsNotify);
}
function onUnSignInAlert(){
    Notify.info('Please sign in to continue', optionsNotify);
}