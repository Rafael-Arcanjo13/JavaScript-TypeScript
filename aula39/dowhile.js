function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1
let max = 50
//let rand = random(min, max);
let rand = 10;

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

//while checa a condição e executa o laço
//doWhile  executa o código primeiro e depois checa a condição

do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);