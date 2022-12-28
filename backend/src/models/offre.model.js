const sequelize = require('../../db');
const {DataTypes} = require('sequelize');
const Offre = sequelize.define('offre', {
    infoPrestataireNumeroSiret: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Offre;