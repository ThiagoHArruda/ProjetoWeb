export class errCadastro {
    constructor() {
        this.mensagemErro = {
            nome: {
                valueMissing: 'O campo nome não pode estar vazio.'
            },
            email: {
                valueMissing: 'O campo de email não pode estar vazio.',
                typeMismatch: 'O email digitado é inválido',
                customError: 'Email já cadastrado'
            },
            user: {
                valueMissing: 'O campo de usuário não pode estar vazio.'
            },
            senha1: {
                valueMissing: 'O campo de senha não pode estar vazio.',
                customError: 'No mínimo 8 caractecteres a-z e A-Z'
            },
            senha2: {
                valueMissing: 'O campo de senha não pode estar vazio.',
                customError: 'As senhas não são iguais'
            }
        }
    }

}