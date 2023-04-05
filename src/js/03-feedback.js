import throttle from "lodash.throttle";

const LOCALSTORAGE__KEY = 'feedback-form-state';
const feedBackForm = document.querySelector('.feedback-form');

restoreUserData();

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE__KEY)))
    localStorage.removeItem(LOCALSTORAGE__KEY);
}


function onTextareaInput(evt){
    let userData = localStorage.getItem(LOCALSTORAGE__KEY);
    userData = userData ? JSON.parse(userData) : {};
    userData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALSTORAGE__KEY, JSON.stringify(userData));
}

function restoreUserData(){
    const saveUserData = JSON.parse(localStorage.getItem(LOCALSTORAGE__KEY));

    if (saveUserData) {
        Object.entries(saveUserData).forEach(([name, value]) =>{
            feedBackForm.elements[name].value = value;
        });
    }
}

feedBackForm.addEventListener('submit', onFormSubmit);
feedBackForm.addEventListener('input', throttle(onTextareaInput, 500));