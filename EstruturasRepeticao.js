// For
for(let numero = 0; numero <= 5; numero ++){
    console.log(numero);
}

//While
let numero = 0
while (numero <= 5){
    console.log(numero);
    numero++;
}

//Do While
let atividadesPendentes;
let atividadesRealizadas = 0;

const consultarAtividadesDoDia = () => {
    if (atividadesRealizadas === 3){
        return[];
    }
    return[
        "Atividade 1",
        "Atividade 2",
        "Atividade 3"
    ]
}

const informarAtividades = (atividades) => {
    if (atividades.length === 0){
        console.log('Não há mais atividades pendentes');
        return;
    }
    console.log(`Atividades pendentes ${atividades}`);
}

do{
    atividadesPendentes = consultarAtividadesDoDia();
    informarAtividades(atividadesPendentes);
    atividadesRealizadas++
}while (atividadesPendentes.length > 0);


//For of
const novosAlunos = ["Weslly", "Joao", "Daniel"];

const darBoasVindas = (nomeAluno) => {
    console.log(`Seja Bem vindo ${nomeAluno}`);
}

for (const aluno of novosAlunos) {
    darBoasVindas(aluno);
}

