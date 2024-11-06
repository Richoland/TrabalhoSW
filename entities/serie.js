const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Importa a instância Sequelize

// Definindo o modelo com Sequelize
const Serie = sequelize.define('Serie', {
    codigo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: DataTypes.TEXT,
    episodio: DataTypes.INTEGER,
    temporada: DataTypes.INTEGER,
}, {
    tableName: 'series', // Nome da tabela no banco, se você quiser especificar
    timestamps: false, // Remova se quiser campos automáticos de createdAt e updatedAt
});

module.exports = Serie;
