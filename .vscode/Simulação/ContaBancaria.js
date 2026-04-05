class ContaBancaria {
    constructor(saldo){
        this.saldo = saldo;
        
      // guardar saldo
    }

    depositar(valor) {
        // somar
        this.saldo += valor;
        

    }

    sacar(valor) {
        // verificar e subtrair
        if (valor <= this.saldo){
            this.saldo -= valor;
        }
        
    }
}

const conta = new ContaBancaria(100);

conta.depositar(50);
conta.sacar(30);

console.log(conta.saldo); // 120