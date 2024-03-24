const DataTypes = require('sequelize');
const sequelize = require('../../db.js');
const services = sequelize.define('services', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
, {
    timestamps: false
    }
);

module.exports = services;