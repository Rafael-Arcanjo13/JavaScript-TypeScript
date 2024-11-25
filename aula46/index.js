function mostrarHora() {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

let timer = setInterval(function() {
    console.log(mostrarHora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 3000)