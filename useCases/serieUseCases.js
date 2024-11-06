const Serie = require('../entities/serie'); // Importa o modelo Sequelize Serie

const getSeriesDB = async () => {
    try {
        const series = await Serie.findAll({ order: [['codigo', 'ASC']] });
        return series; // Retorna as séries diretamente, pois Sequelize já retorna os objetos no formato correto
    } catch (err) {
        throw "Erro ao recuperar séries: " + err;
    }
};

const addSerieDB = async (body) => {
    try {
        const { nome, descricao, episodio, temporada } = body;
        const novaSerie = await Serie.create({ nome, descricao, episodio, temporada });
        return novaSerie; // Retorna a série criada diretamente
    } catch (err) {
        throw "Erro ao inserir a série: " + err;
    }
};

const updateSerieDB = async (body) => {
    try {
        const { codigo, nome, descricao, episodio, temporada } = body;

        const [updated] = await Serie.update(
            { nome, descricao, episodio, temporada },
            { where: { codigo } }
        );

        if (updated) {
            const updatedSerie = await Serie.findOne({ where: { codigo } });
            return updatedSerie; // Retorna a série atualizada
        } else {
            throw `Nenhum registro encontrado com o código ${codigo} para ser alterado`;
        }
    } catch (err) {
        throw "Erro ao alterar a série: " + err;
    }
};

const deleteSerieDB = async (codigo) => {
    try {
        const deleted = await Serie.destroy({ where: { codigo } });
        if (deleted) {
            return "Série removida com sucesso";
        } else {
            throw `Nenhum registro encontrado com o código ${codigo} para ser removido`;
        }
    } catch (err) {
        throw "Erro ao remover a série: " + err;
    }
};

const getSeriePorCodigoDB = async (codigo) => {
    try {
        const serie = await Serie.findOne({ where: { codigo } });
        if (serie) {
            return serie;
        } else {
            throw "Nenhum registro encontrado com o código: " + codigo;
        }
    } catch (err) {
        throw "Erro ao recuperar a série: " + err;
    }
};

module.exports = {
    getSeriesDB,
    addSerieDB,
    updateSerieDB,
    deleteSerieDB,
    getSeriePorCodigoDB
};
