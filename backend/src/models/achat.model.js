const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tarifId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dateAchat: {
        type: Sequelize.DATE,
        allowNull: false
    },
    qrCode: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = User;