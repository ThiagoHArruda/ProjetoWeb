 categoria = document.querySelector("#categorias");
 let categoriaExtendida = document.querySelector("#categoria__extendida")
 let btnPesquisa = document.querySelector(".cabecalho__pesquisa-btn")
 let inputPesquisa = document.querySelector(".cabecalho__pesquisa-input")
 let usuario = document.querySelector(".cabecalho__profile")
     //aparece aba categoria
 categoria.addEventListener("click", () => {

         if (categoriaExtendida.className === "categoria__extendida") {
             console.log("deu certo");
             categoriaExtendida.classList.remove("categoria__extendida")
             categoriaExtendida.classList.add("categoria__extendida-ativo")
         } else {
             console.log("deu certo");
             categoriaExtendida.classList.remove("categoria__extendida-ativo")
             categoriaExtendida.classList.add("categoria__extendida")
         }
     })
     //aparece o input de pesquisa
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
 console.log(usuario)
 usuario.addEventListener("click", () => {
     usuario.classList.toggle('gira__seta')
 })