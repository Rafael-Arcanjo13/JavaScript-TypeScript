const data = new Date();
const diaSemana = data.getDay();
const mesAno = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const diaDoMes = data.getDate();
let diaExatoTela = document.querySelector('h1');

function diaSemanaFuncao (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }    
}


function mesDoAnoFuncao (mesAno) {
    let mesDoAnoTexto;

    switch (mesAno) {
        case 0:
            mesDoAnoTexto = 'Janeiro'
            return mesDoAnoTexto;
        case 1:
            mesDoAnoTexto = 'Fevereiro'
            return mesDoAnoTexto;
        case 2:
            mesDoAnoTexto = 'Março'
            return mesDoAnoTexto;
        case 3: 
            mesDoAnoTexto = 'Abril'
            return mesDoAnoTexto
        case 4: 
            mesDoAnoTexto = 'Maio'
            return mesDoAnoTexto;
        case 5: 
            mesDoAnoTexto = 'Junho'
            return mesDoAnoTexto;
        case 6: 
            mesDoAnoTexto = 'Julho'
            return mesDoAnoTexto;
        case 7: 
            mesDoAnoTexto = 'Agosto'
            return mesDoAnoTexto;
        case 8: 
            mesDoAnoTexto = 'Setembro'
            return mesDoAnoTexto;
        case 9: 
            mesDoAnoTexto = 'Outubro'
            return mesDoAnoTexto;
        case 10: 
            mesDoAnoTexto = 'Novembro'
            return mesDoAnoTexto;
        case 11: 
            mesDoAnoTexto = 'Dezembro'
            return mesDoAnoTexto;
        default: 
            mesDoAnoTexto = ''
            return mesDoAnoTexto
    }
}

diaExatoTela.innerHTML = `${diaSemanaFuncao(diaSemana)}, ${diaDoMes} de ${mesDoAnoFuncao(mesAno)} de ${ano} às ${hora}:${minutos}h`;