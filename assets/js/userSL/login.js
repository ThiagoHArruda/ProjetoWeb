import { catalogoHelpers } from "../helpers/catalogoHelpers.js";
import { alertView } from "../view/alert.js";
export class Login {
    constructor(email, senha) {
        this.item = { email: email, password: senha };
    }

    async login() {
        //primeiro ele varre a localStorage para usar os dados cadastrados
        this.loginAPI(this.item).then((data) => {

            const local = this.loginLocal(this.item)
            let Alerta = new alertView()
            if (data || local) {
                const lista = localStorage.getItem('token')
                if (lista) {
                    let catalogo = new catalogoHelpers
                    catalogo.mostraCatalogo
                    Alerta.alerta("Entrou")
                }

            } else {
                Alerta.alerta("Erro no login")
            }

        }).catch((err) => console.log('erro'))

    }


    loginAPI(item) {
        return new Promise(req => {
            this.conectaAPI(item).then((data) => {
                if (data.status == 200) {
                    data = data.json()
                    data.then((result) => {
                        this.getToken(result.id).then((data) => {
                            result = {
                                id: result.id,
                                nome: data.nome,
                                sobrenome: data.sobrenome,
                                token: result.token,
                                avatar: data.avatar
                            }
                            localStorage.setItem("token", JSON.stringify(result));
                            req(result)
                        }).catch((err) => console.log(err))
                    })
                }
            }).catch(() => console.log("Falha ao conectar a API"))

        })

    }
    async conectaAPI(item) {
        let result = await fetch("https://reqres.in/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });

        return result

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

    async getToken(id) {
        let test = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
        });
        test = await test.json()
        let nomeC = { nome: test.data.first_name, sobrenome: test.data.last_name, avatar: test.data.avatar }
        return nomeC
    }
}