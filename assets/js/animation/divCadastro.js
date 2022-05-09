let cadastro = document.querySelector("#cadastro")
let Telacadastro = document.querySelector('.cadastro__posicao')
let tudo = document

cadastro.addEventListener('click', () => {
    Telacadastro.classList.remove('cadastro__posição--escondido')
    Telacadastro.classList.add('cadastro__posição--ativo')
})

tudo.addEventListener('click', (event) => {
    let click = event.target.parentNode;
    let main = document.querySelector('main')
    if (click == main || click == main.parentNode.children[0]) {
        Telacadastro.classList.remove('cadastro__posição--ativo')
        Telacadastro.classList.add('cadastro__posição--escondido')
    }



})