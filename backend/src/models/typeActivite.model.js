const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const TypeActivite = sequelize.define('typeActivite', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = TypeActivite;