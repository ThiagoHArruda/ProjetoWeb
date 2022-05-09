//cria um id
export class checaID {
    static checaID(array) {

        //checa se array contem todos os ID's, se não, ele substitui
        let tamanho = array.length
        if (tamanho == 0 || tamanho == (array[tamanho - 1].id + 1)) {
            return tamanho
        } else {
            array.forEach((element, cont) => {
                if (!element.id == cont) {
                    console.log(array.length);
                    console.log(cont);
                    return cont;
                }
            })
        }
    }
}