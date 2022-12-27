const { DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Organise = sequelize.define('organise', {
    infoPrestataireNumeroSiret: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    activiteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = Organise;