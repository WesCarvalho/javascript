/* Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos estão na
lista de itens disponiveis do mercado, e, caso estejam, avisar o usuario quais produtos tem e quais
não tem; e por ultimo, exibir a lista de produtos disponiveis ordenados por ordem alfabetica do
mercado para que o usuario possa pedir na proxima vez.*/ 

//importando o modulo readline
const readline = require('readline');

//importando a classe Produto
const Produto = require('./Produto');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Lista dos produtos disponiveis
const produtosMercado = [
     new Produto("feijão", 5.50),
     new Produto("arroz", 19.90),
     new Produto("melancia", 1.99),
     new Produto("suco", 10),
     new Produto("alface", 3.89)];

const validarLista = (listaMercado) => {
    if(!listaMercado) {
        throw Error("A lista não pode ser vazia!");
    }
    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;
    if (itensInvalidos > 0 ){
        throw Error(`Existem ${itensInvalidos} itens inválidos.`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        const produto = produtosMercado.find(produtoMercado => produtoMercado.nome === itemFormatado);

        if(produto){
            produtosDisponiveis.push(produto);
        }else{
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor
    .question('Digite a lista de produtos separado por virgula: \n',
    listaProdutos => {
        try {
           const listaValida = validarLista(listaProdutos);
           const disponibilidade = obterDisponibilidade(listaValida);

           console.log("Os seguintes produtos estão disponíveis:", disponibilidade.produtosDisponiveis);
           console.log("Os seguintes produtos não estão disponíveis:", disponibilidade.produtosIndisponiveis);

           const produtosMercadoOrdenados = produtosMercado.sort((produto1,produto2) => 
                                            produto1.nome.localeCompare(produto2.nome));
           console.log("Confira nossa lista completa de produtos: ", produtosMercadoOrdenados);

        } catch (e) {
            console.log(`Erro ao processar lista (${e.message})`);
        }finally{
            leitor.close();
        }
    }
    );