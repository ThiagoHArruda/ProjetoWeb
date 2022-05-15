export class alertView {
    alertaTexto(text) {
        return `<div class="caixa__alerta">
    <h2 class="caixa__alerta-texto">${text}</h2>
    <button class="caixa__alerta-ok">Ok</button>
    </div>`
    }

    alerta(text) {
        const body = document.querySelector('.alerta')
        body.innerHTML = this.alertaTexto(text)
        const btn = document.querySelector('.caixa__alerta-ok')
        btn.addEventListener("click", () => {

            body.removeChild(btn.parentNode)
        })
    }
}