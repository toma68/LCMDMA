const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Role;