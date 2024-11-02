function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function eventoEnviado(enviado) {
        enviado.preventDefault();
        const peso = Number(document.querySelector('#input-peso').value)
        const altura = Number(document.querySelector('#input-altura').value)

        const imcCalculo = peso / (altura**2);
        let calculoDoPeso;

        if (imcCalculo < 18.5) {
            calculoDoPeso = '(Abaixo do peso)'
        } else if (imcCalculo >= 18.5 && imcCalculo <= 24.9) {
            calculoDoPeso = '(Peso normal)'
        } else if (imcCalculo >= 25 && imcCalculo <= 29.9) {
            calculoDoPeso = '(Sobrepeso)'
        }
        
        
        
        
        
        resultado.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} ${calculoDoPeso}`;
    }
    
    form.addEventListener('submit', eventoEnviado)
}
meuEscopo()