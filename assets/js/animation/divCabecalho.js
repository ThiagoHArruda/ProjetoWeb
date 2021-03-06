import { alertView } from "../view/alert.js";
export class divCabecalho {
    //toggle aba categoria
    static categoriaExtendida() {
        let categoriaExtendida = document.querySelector("#categoria__extendida")
        let categoria = document.querySelector("#categorias");
        categoria.addEventListener("click", () => {

            if (categoriaExtendida.className === "categoria__extendida") {
                categoriaExtendida.classList.remove("categoria__extendida")
                categoriaExtendida.classList.add("categoria__extendida-ativo")
            } else {
                categoriaExtendida.classList.remove("categoria__extendida-ativo")
                categoriaExtendida.classList.add("categoria__extendida")
            }
        })
    }
    static inputPesquisaAnimation() {

        //aparece o input de pesquisa
        let inputPesquisa = document.querySelector(".cabecalho__pesquisa-input")
        inputPesquisa.addEventListener("click", () => {
                if (inputPesquisa.className === "cabecalho__pesquisa-input") {

                    inputPesquisa.classList.remove("cabecalho__pesquisa-input")
                    inputPesquisa.classList.add("cabecalho__pesquisa-inputAtivo")
                    inputPesquisa.placeholder = "Buscar"
                }
            })
            //tira o input de pesquisa
        inputPesquisa.addEventListener("blur", () => {
            if (inputPesquisa.className === "cabecalho__pesquisa-inputAtivo") {
                inputPesquisa.classList.remove("cabecalho__pesquisa-inputAtivo")
                inputPesquisa.classList.add("cabecalho__pesquisa-input")
                inputPesquisa.placeholder = ""
                inputPesquisa.value = ''
            }
        })
    }
    static outProfile() {
        const profile = document.querySelector(".cabecalho__profile")
        const out = profile.children[2]

        profile.addEventListener('click', () => {
            if (out.className === 'cabecalho__profile-out') {
                out.classList.remove('cabecalho__profile-out')
                out.classList.add('cabecalho__profile-out-hover')
            } else {
                out.classList.remove('cabecalho__profile-out-hover');
                out.classList.add('cabecalho__profile-out')
            }
        })

        out.addEventListener("click", () => {
            localStorage.removeItem('token')
            const Alerta = new alertView()
            Alerta.alerta("Logout feito com sucesso")
        })
    }
}