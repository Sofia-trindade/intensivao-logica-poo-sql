function maisRepetido(arr) {
    let contador = {};

    let maior = 0;
    let numeroMaisRepetido;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (contador[num]) {
        contador[num]++;
        } else {
        contador[num] = 1;
        }
    }

    for (let num in contador){
        if (contador[num] > maior ) {
            maior = contador[num];
            numeroMaisRepetido = num;


        }
    }

  return Number(numeroMaisRepetido);

}

console.log(maisRepetido([1, 1, 2, 3, 3, 3, 4, 5,]))