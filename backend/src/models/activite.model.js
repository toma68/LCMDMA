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
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    heureDebut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    heureFin: {
        type: DataTypes.STRING,
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