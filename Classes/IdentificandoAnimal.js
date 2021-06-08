//importando as classes criadas
const Ave = require ('./Ave');
const Mamifero = require ('./Mamifero');
const Reptil = require ('./Reptil');
const Peixe = require ('./Peixe');


//receber o nome do animal
const nomeAnimal = process.argv[2];

if (!nomeAnimal){
    console.log("Favor passar o nome do animal.")
    return
}

//criando a lista de animais disponiveis
const listaAnimais = [
    new Mamifero('vaca',4),
    new Reptil('cobra'),
    new Ave('gaviao',true),
    new Peixe('tubarão',2)
];

//identificar o animal que o usuario digitou
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase());

//validar se o animal foi encontrado
if (!animalSelecionado){
    console.log("O animal não está na nossa lista!");
    return;
}

//identificar qual grupo ele pertence
if (animalSelecionado instanceof Mamifero){
    //exibir os dados genericos e exclusivos do animal
    console.log(`O animal é um mamífero chamado ${animalSelecionado.nome} e tem ${animalSelecionado.quantidadeMamas} mamas.`);
}else if(animalSelecionado instanceof Reptil){
    //exibir os dados genericos e exclusivos do animal
    console.log(`O animal é um reptil chamado ${animalSelecionado.nome} e controla a temperatura do corpo ${animalSelecionado.controlaTemperaturaCorpo}.`);
}else if(animalSelecionado instanceof Ave){
    //exibir os dados genericos e exclusivos do animal
    console.log(`O animal é uma ave chamada ${animalSelecionado.nome} e voa ${animalSelecionado.voa}`);
}else if(animalSelecionado instanceof Peixe){
    //exibir os dados genericos e exclusivos do animal
    console.log(`O animal é um peixe chamado ${animalSelecionado.nome} e tem ${animalSelecionado.quantidadeNadadeiras} nadadeiras.`);
}