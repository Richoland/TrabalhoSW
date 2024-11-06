const express = require('express');
const cors = require('cors');
const rotas = require('./routes/rotas');
const { sequelize } = require('./config'); // Importa a conexão com o banco

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(rotas);

sequelize.sync() // Sincroniza o banco de dados
    .then(() => {
        console.log('Banco de dados sincronizado.');
        app.listen(process.env.PORT || 3002, () => {
            console.log('Servidor da API rodando....');
        });
    })
    .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));
