
function checkIsAuth() {
    const isAuth = localStorage.getItem('isAuth');
    return !!isAuth
}


// observe lk link
let lk = document.querySelector('.lk__link')
lk && lk.addEventListener('click', () => {
    checkIsAuth()
        ? window.location.href = '/pages/lk/lk.html'
        : window.location.href = '/pages/sign_in/sign_in.html'
})


// observe sign in
const submitLogin = document.querySelector('.submit_login')
const loginInput = document.querySelector('.input__login')
const passInput = document.querySelector('.input__pass')
submitLogin && submitLogin.addEventListener('click', (e) => {
    const login = loginInput.value
    const pass = passInput.value
    if ((login.length > 2) && (pass.length > 3)) {
        const loginDB = localStorage.getItem('login');
        const passDB = localStorage.getItem('pass');
        if (!(loginDB) || !(passDB)) {
            window.location.href = '/pages/register/register.html'
        }
        if ((login !== loginDB) || (passDB !== pass)) {
            alert("Пара логин:пароль не верные")
        } else {
            if ((login === loginDB) || (passDB === pass)) {
                localStorage.setItem('isAuth', "true");
                window.location.href = '/pages/lk/lk.html'
            }
        }
        
    }
})


// observe register
const submitRegister = document.querySelector('.submit_register')
const valuesInputsCollection = document.querySelectorAll('.input__form')
submitRegister && submitRegister.addEventListener('click', (e) => {
    const notValid = Array.from(valuesInputsCollection).some(el => el.value.length < 3)
    if (!notValid) {
        let userLogin = document.querySelector('.input__login').value
        let userPass = document.querySelector('.input__pass').value
        let userName = document.querySelector('.input__name').value
        let userSurname = document.querySelector('.input__surname').value
        let userFathername = document.querySelector('.input__fathername').value
        let userEmail = document.querySelector('.input__email').value

        localStorage.setItem('login', userLogin);
        localStorage.setItem('pass', userPass);

        localStorage.setItem('fatherName', userFathername);
        localStorage.setItem('name', userName);
        localStorage.setItem('surname', userSurname);
        localStorage.setItem('email', userEmail);

        window.location.href = '/pages/sign_in/sign_in.html'
    }
})


// observe sign out 
const submitSignOut = document.querySelector('.submit_sign-out')
submitSignOut && submitSignOut.addEventListener('click', (e) => {
    localStorage.clear()
    window.location.href = '/index.html'

})







