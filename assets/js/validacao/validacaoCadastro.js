import { validadoresCadastro } from './validadores.js'
import { errCadastro } from "./mensagemError.js"


let inputCadastro = document.querySelectorAll(".cadastro__input")
let divErro = document.querySelectorAll('.cadastro__break')

console.log(inputCadastro);

inputCadastro.forEach((element, contador) => {

    element.addEventListener('blur', input => {


        let tipoInput = input.target.dataset.tipo
        let test = new validadoresCadastro(tipoInput)
        let test1 = `test.classe.${tipoInput}`
        console.log(test1);
        console.log(test.classe.nome);
        // if (validadores[tipoInput]) {
        //     validadores[tipoInput](element)
        // }

        if (input.target.validity.valid) {
            divErro[contador].innerHTML = ''
            input.target.classList.remove("cadastro__input-erro")
        } else {

            input.target.classList.add("cadastro__input-erro")
            const err = new errCadastro(tipoInput, input)
                // console.log(err.mensagemErro);
                // console.log(err.mensagemErro.tipoInput);
            divErro[contador].innerHTML = err.tipoInput
        }
    })
});