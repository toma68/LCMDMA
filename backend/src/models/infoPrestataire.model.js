const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const infoPrestataire = sequelize.define('infoPrestataire', {
    numeroSiret: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    contenuPage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageMasque: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    nomEntreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    infoPrestataire:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = infoPrestataire;