const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Stand = sequelize.define('stand', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    surface: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    logistique: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Stand;