const emprestimo = Number(prompt('valor do emprestimo'));

var aposJuros = emprestimo + ((emprestimo * 20) / 100);

var parcela = aposJuros / 10

alert('Pagarei 10 parcelas de R$ ' + parcela)