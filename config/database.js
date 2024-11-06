const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

let sequelize;
if (isProduction) {
  console.log("tembo")
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
  console.log("local")
  sequelize = new Sequelize('trabalhoSW', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  });
}

module.exports = { sequelize };