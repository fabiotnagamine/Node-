// const nome = "Fabio";
// const sobrenome = "Nagamine";

// const nomeCompleto = () => {
//     console.log(nome, sobrenome);
// }

// module.exports.nome = nome;

// module.exports.sobrenome = sobrenome;

// module.exports.nomeCompleto = nomeCompleto;

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(){
        console.log(this.nome, this.sobrenome);
    }
}

module.exports = Pessoa;