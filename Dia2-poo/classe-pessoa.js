// classe 
class Pessoa { 
    constructor(nome, sobrenome, idade){   //atributos (Características/Dados)
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade

    }
    
    //Metódo (Ações/Funções)
    comprimetar(){
        return(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos.`);  
    }

}

//objetos
const pessoa1 = new Pessoa('Sofia', 'Trindade', 28);
const pessoa2 = new Pessoa('Luiz', 'Caldas', 29);
const pessoa3 = new Pessoa('Maria', 'Trindade', 2);
console.log(pessoa1.comprimetar());
console.log(pessoa2.comprimetar());
console.log(pessoa3.comprimetar());