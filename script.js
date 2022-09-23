let numero = 0

function aumentar() {
    numero = numero + 1
    // numero ++
    mostrarnatela()

}

function diminuir() {
    numero = numero - 1
    //numero --
    mostrarnatela()

}

function zerar() {
    numero = 0
    // numero -= numero
    mostrarnatela()

}

function mostrarnatela() {
const p = document.querySelector("#resultado")
p.innerText = numero
}
