function somaArray(arr) {
  // seu código

    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
        
    }

    return soma;
}

console.log(somaArray([1, 2, 3, 4])); // 10