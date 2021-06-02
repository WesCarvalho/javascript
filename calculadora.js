// importação do modulo para ler o input do usuario
const readline = require('readline');

//criação da interface que fará a leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const realizarCalculo = (num1, num2, operacao) => {
    const n1 = parseInt(num1)
    const n2 = parseInt(num2)
    switch (operacao){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            return 0;
    }
}


leitor.question("Digite o primeiro numero: \n",(primeiroNumero) => {
    leitor.question("Digite o segundo numero: \n",(segundoNumero) => {
        leitor.question("Digite o operador: \n",(operador) =>{
            const resultado = realizarCalculo(
                primeiroNumero,segundoNumero,operador
            )
            console.log({resultado});
            leitor.close();
        });
    });
});