// 1. contador
// 2. for
// 3. if (vogal)
// 4. contador++

function contarVogais(str) {
  // seu código

  let contador = 0;

  const vogais = ['a', 'e', 'i', 'o', 'u']

  let letra = str.toLowerCase()

  for (let i = 0; i < letra.length; i++) {
    if (vogais.includes(letra[i])){
      contador++
    }
  }

  return contador
}

console.log(contarVogais("Antonio")); // 3