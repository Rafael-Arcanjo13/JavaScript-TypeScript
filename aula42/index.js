//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura) {
    return largura > altura;
}

const ePaisagem2 = (largura, altura) => largura > altura;


console.log(ePaisagem2(40, 50))
console.log(ePaisagem(30, 20))