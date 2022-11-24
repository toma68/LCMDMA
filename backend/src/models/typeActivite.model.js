const {DataTypes} = require('sequelize');
const sequelize = require('../../db.js');
const TypeActivite = sequelize.define('typeActivite', {
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

module.exports = TypeActivite;