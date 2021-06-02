const listaConvidados = ["Weslley", "Ana", "Jose"];

const nome = process.argv[2];
const idade = parseInt(process.argv[3]);

if (!listaConvidados.includes(nome)){
    console.log("Voce não foi convidado");
    return;
}

if(idade < 18) {
    console.log("Idade não permitida");
    return;
}

console.log("Seja bem vindo!");
