function criaSegundosParaFormatar(segundos) {
    const hora = new Date(segundos * 1000)
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0;
let timer;

iniciar.addEventListener('click', function(event) {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaSegundosParaFormatar(segundos)
    }, 1000)
})

pausar.addEventListener('click', function(event) {})

zerar.addEventListener('click', function(event) {})