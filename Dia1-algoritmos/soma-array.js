//Notas Bimestral
const prompt = require('prompt-sync')();

const notas1 = Number(prompt("Digite sua nota 1: "));
const notas2 = Number(prompt("Digite sua nota 2: "));
const notas3 = Number(prompt("Digite sua nota 3: "));


let bimestre = [notas1, notas2, notas3];

let soma = 0;

for (let i = 0; i < bimestre.length; i++) {
  soma += bimestre[i] ;

}

let notaBimestral = soma / 3;
console.log('Nota do Bimeste ' + notaBimestral);

if (notaBimestral >= 7) {
   console.log(`Nota do Bimeste: ${notaBimestral}, você foi Aprovado!`)
} else {
    console.log(`Nota do Bimeste: ${notaBimestral}, você está em recuperação :/`)
}
