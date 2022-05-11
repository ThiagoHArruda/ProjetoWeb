import { catalogoView } from "../view/catalogoView.js";
export class catalogoHelpers {

    get mostraCatalogo() {
        this.retiraLogin()
        this.colocaSection()
        console.log('cheguei');
    }
    retiraLogin() {
        let caixaLogin = document.querySelector('.caixa__login')
        console.log(caixaLogin);
        caixaLogin.parentNode.removeChild(caixaLogin)
    }
    colocaSection() {
        let section = document.querySelector(".section")
        console.log(section);
        section.innerHTML = catalogoView.template()
    }



}