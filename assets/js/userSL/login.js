import { catalogoHelpers } from "../helpers/catalogoHelpers.js";
export class Login {
    constructor(email, senha) {
        this.item = { email: email, password: senha };
    }

    async login() {
        //primeiro ele varre a localStorage para usar os dados cadastrados
        this.loginAPI(this.item).then((data) => {

            if (data || this.loginLocal(this.item)) {
                alert('entrou') //precisa tirar
                let catalogo = new catalogoHelpers
                catalogo.mostraCatalogo

            } else {
                console.log("Erro");
            }
        })

    }


    async loginAPI(item) {
        let result = await fetch("https://reqres.in/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        if (result.status == 200) {
            result = await result.json()
            result = { token: result.token, id: result.id }
            localStorage.setItem("token", JSON.stringify(result));
            this.getToken()
            return true
        } else {
            result = await result.json()
            return false
        }
    }
    loginLocal(item) {
        let login = false
        const listaCadastro = JSON.parse(localStorage.getItem("ListaCadastro")) || [];
        listaCadastro.forEach((element) => {
            if (element.email == item.email && element.senha1 == item.password) {
                console.log(element.user, element.senha1);
                login = true
            }
        })
        return login
    }

    async getToken() {
        let token = JSON.parse(localStorage.getItem('token'))
        console.log(`https://reqres.in/api/users/${token.id}`);
        let test = await fetch(`https://reqres.in/api/users/${token.id}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
        });
        test = await test.json()
        let nome = test.data.first_name;
        let sobrenome = test.data.last_name
        console.log(nome, sobrenome);
    }
}