const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

let sequelize;
if (isProduction) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Para evitar problemas de certificado SSL em produção
      },
    },
  });
} else {
  sequelize = new Sequelize('trabalhoSW', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  });
}

module.exports = { sequelize };