//datasource sequelize
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('lcdma', 'toma', '2805', {
    host: 'localhost',
    dialect: 'mysql'
});
//import models
sequelize.sync().then(async () => {
    console.log('Database synced');
    await sequelize.close();
});


