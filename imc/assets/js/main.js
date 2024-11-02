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
        } else if (imcCalculo >= 30 && imcCalculo <= 34.9) {
            calculoDoPeso = '(Obesidade grau 1)'
        } else if (imcCalculo >= 35 && imcCalculo <= 39.9) {
            calculoDoPeso = '(Obesidade grau 2)'
        } else if (imcCalculo >= 40) {
            calculoDoPeso = '(Obesidade grau 3)'
        }
        
        
        
        
        
        resultado.innerHTML = `Seu IMC é ${imcCalculo.toFixed(2)} ${calculoDoPeso}`;
    }
    
    form.addEventListener('submit', eventoEnviado)
}
meuEscopo()