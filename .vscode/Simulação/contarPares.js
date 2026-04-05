function contarPares(arr) {


  let contador = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ) {
            contador++
        }

    }

    return contador
}

console.log(contarPares([1, 2, 3, 4, 6])); // 3