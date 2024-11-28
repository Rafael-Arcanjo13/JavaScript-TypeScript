function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    const relogio = document.querySelector('.relogio');
    const marcacoes = document.querySelector('.marcacoes');

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado');
        }

        if (elementoClicado.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elementoClicado.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00'
            marcacoes.innerHTML = ''
        }

        if(elementoClicado.classList.contains('marcar')) {
            let tempoMarcado = criaHoraDosSegundos(segundos)
            let marcado = marcacoes.innerHTML += `${tempoMarcado} <br>`;
        }
    })
}
relogio();