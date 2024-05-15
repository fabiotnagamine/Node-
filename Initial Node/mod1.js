const nome = "Fabio";
const sobrenome = "Nagamine";

const nomeCompleto = () => {
    console.log(nome, sobrenome);
}

module.exports.nome = nome;

module.exports.sobrenome = sobrenome;

module.exports.nomeCompleto = nomeCompleto;