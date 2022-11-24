const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Stand = sequelize.define('stand', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    surface: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logistique: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = Stand;