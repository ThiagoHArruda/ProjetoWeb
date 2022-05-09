import { errCadastro } from './mensagemError.js'

export class validadoresCadastro {
    constructor(input) {
        this.classe = {
            nome: input => validaNome(input),
            user: input => validaUser(input),
            email: input => validaEmail(input),
            senha1: input => validaSenha(input),
            senha2: input => validaSenhaIgual(input),
        }
    }

    validaNome(input) {
        console.log('po');
    }

    validaUser(input) {}

    validaEmail(input) {
        let listaCadastro = JSON.parse(localStorage.getItem("ListaCadastro") || []);
        let email = false
        let mensagem = ''
        listaCadastro.forEach((element) => {
            if (element.email == input.value) {

                return email = true
            }
        })
        if (email) {
            mensagem = 'Email já cadastrado'
            return input.setCustomValidity(mensagem)
        }

    }

    validaSenha(input) {
        console.log(input.value);
        if (input.value == '') {
            return (input.setCustomValidity(''))
        } else {
            senhaForte(input);
        }

    }

    validaSenhaIgual(input) {
        checaSenhaIgual(input)
    }

    senhaForte(input) {
        let senha = input.value;
        const regex = /^[0-9a-zA-Z]{6,}$/;

        let mensagem = ""

        if (!senha.match(regex)) {
            mensagem = "No mínimo 8 caractecteres com maiuscula e miniscula";
            return (input.setCustomValidity(mensagem))
        } else {
            return (input.setCustomValidity(''))
        }
    }

    checaSenhaIgual(input) {
        let senha = document.querySelectorAll(".cadastro__input")
        let mensagem = "";

        if (input.value == senha[3].value) {

            return (input.setCustomValidity(''))
        } else {
            mensagem = "Deu erro aqui rapaz"
            return (input.setCustomValidity(mensagem))
        }
    }

}