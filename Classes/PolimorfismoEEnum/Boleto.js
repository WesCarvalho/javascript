const FormaPagamento = require ('./FormaPagamento')

class Boleto extends FormaPagamento {
    efetuarPagamento(valor){
        console.log(`Pagamento efetuado com boleto no valor de R$ ${valor}.`);
    }
}

module.exports = Boleto;