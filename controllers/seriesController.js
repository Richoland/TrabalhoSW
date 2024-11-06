const { getSeriesDB, addSerieDB, updateSerieDB, deleteSerieDB, getSeriePorCodigoDB } = require('../useCases/serieUseCases');

const getSeries = async (request, response) => {
    try {
        const data = await getSeriesDB();
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar a série: ' + err
        });
    }
};

const addSerie = async (request, response) => {
    try {
        const data = await addSerieDB(request.body);
        response.status(200).json({
            status: "success",
            message: "Série criada",
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const updateSerie = async (request, response) => {
    try {
        const data = await updateSerieDB(request.body);
        response.status(200).json({
            status: "success",
            message: "Série alterada",
            objeto: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const deleteSerie = async (request, response) => {
    try {
        const data = await deleteSerieDB(parseInt(request.params.codigo));
        response.status(200).json({
            status: "success",
            message: data
        });
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

const getSeriePorCodigo = async (request, response) => {
    try {
        const data = await getSeriePorCodigoDB(parseInt(request.params.codigo));
        response.status(200).json(data);
    } catch (err) {
        response.status(400).json({
            status: 'error',
            message: err
        });
    }
};

module.exports = {
    getSeries,
    addSerie,
    updateSerie,
    deleteSerie,
    getSeriePorCodigo
};
