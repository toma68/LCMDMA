const { DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Achat = sequelize.define('achat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tarifId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateAchat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    qrCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Achat;