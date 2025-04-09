const cpf = '705.484.450-52'
const cpfLimpo = cpf.replace(/\D+/g, '');
const cpfArray = Array.from(cpfLimpo);

console.log(cpfArray)