const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const Token = sequelize.define('token', {
    token: {
        type: DataTypes.STRING, allowNull: false, primaryKey: true
    },
    ip: {
        type: DataTypes.STRING, allowNull: false
    },
    dateCreation: {
        type: DataTypes.DATE, allowNull: false
    },
    dateExpiration: {
        type: DataTypes.DATE, allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Token;