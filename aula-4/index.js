// configurar o express
// criar o controller para receber requisição
// devolver para o usuario os dados dele via JSON
// swagger

const App = require('./src/App');

const api = new App();
api.start();