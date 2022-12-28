const {DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../../db.js');
const LivreDOr = sequelize.define('livreDOr', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    contenuMessage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateCreation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateModification: {
        type: DataTypes.DATE,
        allowNull: false
    },
    noteMessage: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'dateCreation',
    updatedAt: 'dateModification'
});

module.exports = LivreDOr;