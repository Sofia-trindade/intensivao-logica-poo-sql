-- SELECT: seleciona os campos da tasbela que deseja o resultado ou use o * p/ incluir todos os campos
-- FROM: indica qual tabela esses campos são encontrados
-- WHERE: permite definir condições p/ restringir os dados retornados
-- JOIN: é utilizado para combinar linhas de duas ou mais tabelas com base em uma coluna relacionada entre elas.

SELECT * FROM clinte;

SELECT nome FROM clinte WHERE idade > 25;

SELECT pedidos.id, clintes.nome
FROM pedidos
JOIN clintes ON pedidos.clinte_id = clintes.id;

