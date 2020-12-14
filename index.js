let profileName = document.querySelector('.profile__name')
let profileLastName = document.querySelector('.profile__lastname')
let profileCountry = document.querySelector('.handing__text')

let form = document.querySelector('.form')
let input = document.querySelector('.form__input')
let inputName = document.querySelector('.form__contact-name')
let inputLastName = document.querySelector('.form__contact-lastname')
let inputCounty = document.querySelector('.form__contact-county')
let buttonSubmit = document.querySelector('.form__submit')
let buttonReset = document.querySelector('.profile-reset')



function saveValue() {
    profileName.textContent = inputName.value;
    profileLastName.textContent = inputLastName.value;
    profileCountry.textContent = inputCounty .value;
}


function restetValue() {
    profileName.textContent = "Введите ваше имя";
    profileLastName.textContent = "Введите вашу фамилию";
    profileCountry.textContent = "Ваш город"
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    inputName.value = profileName.textContent;
    inputLastName.value = profileLastName.textContent;
}

buttonSubmit.addEventListener('click', saveValue);
form.addEventListener('submit', formSubmitHandler);


// https://github.com/taniarascia/sandbox/blob/master/tab/js/scripts.js

function formSubmitHandler (e) {
    e.preventDefault()
    itemsArray.push(inputName.value,inputLastName.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
}

buttonReset.addEventListener(
    'click', function() {
        localStorage.clear();
        restetValue();
    }
)

if (localStorage.getItem('items')) {  
  const data = JSON.parse(localStorage.getItem('items'));
} else {
  const data = [];
}

