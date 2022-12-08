const sequelize = require('../db.js');

const insertData = require('./insertData.js');


const Achat = require('../src/models/achat.model');
const Activite = require('../src/models/activite.model');
const InfoPrestataire = require('../src/models/infoPrestataire.model');
const Role = require('../src/models/role.model');
const Stand = require('../src/models/stand.model');
const Tarif = require('../src/models/tarif.model');
const Token = require('../src/models/token.model');
const TypeActivite = require('../src/models/typeActivite.model');
const User = require('../src/models/user.model');

// One-to-Many Join

User.belongsTo(Role, {foreignKey: 'roleId'});

Token.belongsTo(User, {foreignKey: 'userId'});

Achat.belongsTo(Tarif, {foreignKey: 'tarifId'});

User.hasOne(InfoPrestataire, {foreignKey: 'userId'});

Activite.belongsTo(Stand, {foreignKey: 'standId'});
Activite.belongsTo(TypeActivite, {foreignKey: 'typeActiviteId'});

//Many-To-Many Join

User.belongsToMany(Activite, {through: 'reserve'});
Activite.belongsToMany(User, {through: 'reserve'});

InfoPrestataire.belongsToMany(Activite, {through: 'organise'});
Activite.belongsToMany(InfoPrestataire, {through: 'organise'});

User.belongsToMany(Achat, {through: 'achete'});
Achat.belongsToMany(User, {through: 'achete'});



sequelize.sync()
    .then(() => {
        console.log("Tables created");
    })

/*
sequelize.sync({force: true})
    .then(() => {
        console.log("Tables created");
        insertData();
    }
    );*/
