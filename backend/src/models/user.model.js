const { DataTypes } = require('sequelize');
const sequelize = require('../../db.js');
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nom : {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
}
);

module.exports = User;