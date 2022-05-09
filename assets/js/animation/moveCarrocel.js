var botaoDireito = document.querySelectorAll(".catalogo__carrocel-botaoDireito")
var botaoEsquerdo = document.querySelectorAll(".catalogo__carrocel-botaoEsquerdo")
let girar = new Array();

botaoDireito.forEach(((element, ind) => {
    girar.push(10)

    element.addEventListener('click', () => {
        let ul = document.querySelectorAll('.catalogo__carrocel-lista')
        let ulWidth = ((document.querySelector(".catalogo__carrocel-lista").clientWidth) - document.querySelector(".catalogo__carrocel").clientWidth) + 78

        //define o máximo de vezes que ele pode clicar
        if (girar[ind] > 0) {
            //aparece o botão esquerdo
            botaoEsquerdo[ind].classList.add('catalogo__carrocel-botaoEsquerdo--ativo');

            //calcula o giro da div
            girar[ind] -= 1
            ul[ind].style.transform = `translateX(-${ulWidth-(girar[ind]*ulWidth*.1)}px)`;

        }
        if (girar[ind] == 0) {
            //remove o botão quando chega no tamanho máximo
            botaoDireito[ind].classList.add('catalogo__carrocel-botaoEsquerdo--none')
        }
    })
}))

botaoEsquerdo.forEach(((element, ind) => {

    element.addEventListener('click', () => {
        let ul = document.querySelectorAll('.catalogo__carrocel-lista')
        let ulWidth = ((document.querySelector(".catalogo__carrocel-lista").clientWidth) - document.querySelector(".catalogo__carrocel").clientWidth) + 78

        //define o máximo de vezes que ele pode clicar
        if (girar[ind] < 10) {
            //aparece o botão direito
            botaoDireito[ind].classList.remove('catalogo__carrocel-botaoEsquerdo--none');

            //calcula o giro da div
            girar[ind] += 1
            ul[ind].style.transform = `translateX(-${ulWidth-(girar[ind]*ulWidth*.1)}px)`;
        }
        if (girar[ind] == 10) {
            //remove o botão quando chega no tamanho máximo
            botaoEsquerdo[ind].classList.remove('catalogo__carrocel-botaoEsquerdo--ativo')
        }

    })
}))