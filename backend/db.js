const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
module.exports = sequelize;