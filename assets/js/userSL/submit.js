import { criaID } from './criaID.js'
import { Login } from './login.js'

let formRegister = document.getElementById("cadastroForm")
let formLogin = document.querySelector(".login")




formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    let input = document.querySelectorAll('.cadastro__input')
    let inputArray = new Array();
    input.forEach((input, contador) => {
        inputArray[contador] = input.value
    })

    criaID.cadastrar(inputArray)
})

formLogin.addEventListener("submit", (event => {
    event.preventDefault();
    let login__input = document.querySelectorAll(".login__input")
    let email = login__input[0].value
    let senha = login__input[1].value
    let login = new Login(email, senha)

    login.login()
}))