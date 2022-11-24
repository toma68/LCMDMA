const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Token = sequelize.define('token', {
    token: {
        type: Sequelize.STRING, allowNull: false, primaryKey: true
    },
    ip: {
        type: Sequelize.STRING, allowNull: false
    },
    dateCreation: {
        type: Sequelize.DATE, allowNull: false
    },
    dateExpiration: {
        type: Sequelize.DATE, allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER, allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Token;