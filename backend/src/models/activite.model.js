const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Activite = sequelize.define('activite', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false

    },
    heureDebut: {
        type: DataTypes.DATE,
        allowNull: false
    },
    heureFin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Activite;