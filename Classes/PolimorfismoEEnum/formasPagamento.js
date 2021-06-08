//importação das classes
const Boleto = require('./Boleto');
const Pix = require('./Pix');

//importação do Enum
const TipoPagamento = require('./TipoPagamento');

//receber forma de pagamento e valor
const formaDePagamento = process.argv[2]; //primeiro argumento da função
const valor = process.argv[3]; //segundo argumento da função

//validar parametros de entrada
if (!formaDePagamento){
    console.log("Forma de pagamento não informada!")
    return
}

if (!valor){
    console.log("Vaor não informado!")
    return
}

//identificar forma de pagamento
let objetoFormaPagamento;

const eBoleto = formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const ePix = formaDePagamento.toLowerCase() === TipoPagamento.PIX.toLowerCase();

if (eBoleto) {
    objetoFormaPagamento = new Boleto();
}else if (ePix){
    objetoFormaPagamento = new Pix();
}else {
    console.log("Forma de pagamento inválida!");
    return;
}

//efetuar pagamento
objetoFormaPagamento.efetuarPagamento(valor);