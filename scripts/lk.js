

const name = localStorage.getItem("name")
const nameElem = document.querySelector('.user__name')
nameElem.textContent = name;


const surname = localStorage.getItem("surname")
const surnameElem = document.querySelector('.user__surname')
surnameElem.textContent = surname;

const fathername = localStorage.getItem("fatherName")
const fathernameElem = document.querySelector('.user__fathername')
fathernameElem.textContent = fathername;

const login = localStorage.getItem("login")
const loginElem = document.querySelector('.user__login')
loginElem.textContent = login;


const email = localStorage.getItem("email")
const emailElem = document.querySelector('.user__email')
emailElem.textContent = email;

