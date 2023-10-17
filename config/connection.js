const Sequelize = require('sequelize');
require('dotenv').config();

const URI = process.env.MYSQLURI;
const sequelize = new Sequelize(URI);

module.exports = sequelize;