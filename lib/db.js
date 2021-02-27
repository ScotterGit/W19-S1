const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:boot@localhost/test2-26', {logging: false});
module.exports = {sequelize};
