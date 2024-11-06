const { Router } = require('express');
const seriesController = require('../controllers/seriesController');

const rotas = new Router();

// Rota para gerenciar todas as séries
rotas.route('/series')
     .get(seriesController.getSeries)  // Pega todas as séries
     .post(seriesController.addSerie); // Adiciona uma nova série

// Rota para gerenciar uma série específica
rotas.route('/series/:codigo')
     .get(seriesController.getSeriePorCodigo)  // Pega uma série por código
     .put(seriesController.updateSerie)        // Atualiza uma série por código
     .delete(seriesController.deleteSerie);    // Exclui uma série por código

module.exports = rotas;
