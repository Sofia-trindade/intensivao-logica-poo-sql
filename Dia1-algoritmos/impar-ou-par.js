const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

if (numero % 2 === 0 ){
    console.log(`${numero} é par`)
}else{
    console.log(`${numero} é impar`)
}
