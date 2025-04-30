const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta examples
app.use(express.static(path.join(__dirname, 'examples')));

// Rota principal que redireciona para o merchant-dashboard
app.get('/', (req, res) => {
    res.redirect('/merchant-dashboard.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Acesse o merchant dashboard em: http://localhost:3000/merchant-dashboard.html');
}); 