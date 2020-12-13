let profileName = document.querySelector('.profile__name')
let profileLastName = document.querySelector('.profile__lastname')

let form = document.querySelector('.form')
let input = document.querySelector('.form__input')
let inputName = document.querySelector('.form__contact-name')
let inputLastName = document.querySelector('.form__contact-lastname')
let buttonSubmit = document.querySelector('.form__submit')
let buttonReset = document.querySelector('.profile-reset')


function saveValue() {
    profileName.textContent = inputName.value;
    profileLastName.textContent = inputLastName.value;
}

function restetValue() {
    profileName.textContent = "Введите ваше имя";
    profileLastName.textContent = "Введите вашу фамилию";
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    inputName.value = profileName.textContent;
    inputLastName.value = profileLastName.textContent;
}

buttonSubmit.addEventListener('click', saveValue);
form.addEventListener('submit', formSubmitHandler);


let itemsArray = []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

function formSubmitHandler (e) {
e.preventDefault()
itemsArray.push(inputName.value,inputLastName.value)
localStorage.setItem('items', JSON.stringify(itemsArray))
}


buttonReset.addEventListener('click', function() {
    localStorage.clear()
    restetValue()
  })

  let items
if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

//Добавляем или изменяем значение:
// localStorage.setItem('name', 'inputName.value'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводим его в консоль:
// var localValue = localStorage.getItem('myKey');
// console.log(localValue); //"myValue"

//удаляем:
//localStorage.removeItem("myKey");

//очищаем все хранилище
//localStorage.clear()

//То же самое, только с квадратными скобками:

//localStorage["Ключ"] = "Значение" //установка значения
//localStorage["Ключ"] // Получение значения
//delete localStorage["Ключ"] // Удаление значения