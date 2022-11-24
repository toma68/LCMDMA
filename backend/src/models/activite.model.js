const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Activite = sequelize.define('activite', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false

    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    heureDebut: {
        type: Sequelize.STRING,
        allowNull: false
    },
    heureFin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Activite;