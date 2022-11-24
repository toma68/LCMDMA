const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('user', {
    numeroSiret: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    contenuPage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pageMasque: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    nomEntreprise: {
        type: Sequelize.STRING,
        allowNull: false
    },
    infoPrestataire:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = User;