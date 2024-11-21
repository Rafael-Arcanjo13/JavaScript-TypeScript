function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1
let max = 50
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

//A variavel é criada fora do while
//sitaxe: while (condição) {comando}
//Lembrar sempre de atualizar de alguma forma a variavel de controle ou vai ser criada um laço infinito.