/*try {
    // É executada quando não há erros
} catch(err) {
    // É executada quando há erros
} finally {
    // É executado sempre
}*/

/*try {
    console.log('Abrir um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

    try {
        console.log(e)
    } catch (erro) {
        console.log('Deu erro')
    } finally {
        console.log('Sempre executado')
    } 
} catch (err) {
    console.log('Tratando o erro')
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
const data = new Date('01-01-1970 12:58:12')
const hora = retornaHora();
console.log(hora)
} catch(err) {
    //tratar erro
    //console.log(err)
} finally {
    console.log('Tenha um bom dia!')
}