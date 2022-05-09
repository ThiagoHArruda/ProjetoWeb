import { checaID } from "./checaID.js";
export class criaID {

    constructor(array, lista) {
        this.dado = {
            id: checaID.checaID(lista),
            nome: array[0],
            user: array[1],
            email: array[2],
            senha1: array[3],
            senha2: array[4]
        }
    }
    static cadastrar(array) {
        const lista = JSON.parse(localStorage.getItem("ListaCadastro")) || [];
        let dado = new criaID(array, lista)
            // armazena o constructor checaID
        lista.push(dado.dado);
        localStorage.setItem("ListaCadastro", JSON.stringify(lista));
        console.warn("Cadastro feito com sucesso.")
    };



}