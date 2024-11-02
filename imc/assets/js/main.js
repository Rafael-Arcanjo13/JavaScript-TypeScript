function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function eventoEnviado(enviado) {
        enviado.preventDefault();
        const peso = Number(document.querySelector('#input-peso').value)
        const altura = Number(document.querySelector('#input-altura').value)

        const imcCalculo = peso / (altura**2);
        
        
        
        
        
        //resultado.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)}`;
    }
    
    form.addEventListener('submit', eventoEnviado)
}
meuEscopo()