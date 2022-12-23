const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const LivreDOr = sequelize.define('livreDOr', {
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
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'dateCreation',
    updatedAt: 'dateModification'
});

module.exports = LivreDOr;