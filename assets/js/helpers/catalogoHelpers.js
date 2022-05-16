import { catalogoView } from "../view/catalogoView.js";
import { genrerMovie } from "../movie/genderMovie.js";
import { cabecalhoView } from "../view/cabecalhoView.js";
import { divCabecalho } from "../animation/divCabecalho.js";
import { moveCarrocel } from "../animation/moveCarrocel.js";


export class catalogoHelpers {

    get mostraCatalogo() {
        this.retiraLogin()
        this.colocaSection()
        this.colocaMovie()
        this.colocaCabecalho()
    }
    retiraLogin() {
        let caixaLogin = document.querySelector('.caixa__login')
        let data = caixaLogin.children

        let index = 0
        for (index = (data.length) - 1; index >= 0; index--) {
            caixaLogin.removeChild(data[index])
        }

        caixaLogin.classList.remove('caixa__login')

    }
    colocaCabecalho() {
        let test = 0

        const listaCadastro = JSON.parse(localStorage.getItem("token"))
        const cabecalho = document.querySelector('.cabecalho')
        cabecalho.innerHTML = cabecalhoView.template(listaCadastro.nome, listaCadastro.avatar)
        divCabecalho.categoriaExtendida()
        divCabecalho.inputPesquisaAnimation()
        divCabecalho.outProfile()
        test = test + 1




    }

    colocaSection() {
        let section = document.querySelector(".section")
        section.innerHTML = catalogoView.template()

    }

    colocaMovie() {
        let genrer = new genrerMovie()
        genrer.GenrerList
        moveCarrocel.mover()
    }

}