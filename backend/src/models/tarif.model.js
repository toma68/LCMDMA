const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const tarif = sequelize.define('tarif', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = tarif;