const FormaPagamento = require('./FormaPagamento');

class Pix extends FormaPagamento{
    efetuarPagamento(valor){
        console.log(`Pagamento efetuado com pix no valor de R$ ${valor}.`);
    }
}

module.exports = Pix;