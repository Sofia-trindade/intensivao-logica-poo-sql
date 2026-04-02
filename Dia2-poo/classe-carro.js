class Carro {
    constructor(marca, modelo, cor, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;

    }

    Acelerar(){
        return(`${this.modelo} está em velocidade máxima`)
    }
}


const carro1 = new Carro('Honda', 'Civic', 'vermelho', 2025);

console.log(carro1.Acelerar());