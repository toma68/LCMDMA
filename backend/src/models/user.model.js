const { DataTypes } = require('sequelize');
const sequelize = require('../../db.js');
const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,

    },
    nom : {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom : {
        type: DataTypes.STRING,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
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