const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const infoPrestataire = sequelize.define('infoPrestataire', {
    numeroSiret: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    contenuPage: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pageMasque: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    nomEntreprise: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = infoPrestataire;