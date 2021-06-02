const valido = true;
let idade = 22

if (valido || idade >= 25){
    console.log("expressão valida")
}
else{
    console.log("expressão invalida");
}

//switch

const listaMarcas = ["Chevrolet", "Peugeot"]
const marca = process.argv[2];

switch(marca){
    case "Chevrolet":
        console.log("Escolheu Chevrolet")
        break
    case "Peugeot":
        console.log("Escolheu Peugeot")
        break
    default:
        console.log("Não temos essa marca")
}


