const { Router } = require('express');

const seriesController = require('../controllers/seriesController');

const rotas = new Router();

rotas.route('/series')
     .get(seriesController.getSeries)
     .post(seriesController.addSerie)
     .put(seriesController.updateSerie)

rotas.route('/series/:codigo')
     .get(seriesController.getSeriePorCodigo)
     .delete(seriesController.deleteSerie)

module.exports = rotas;