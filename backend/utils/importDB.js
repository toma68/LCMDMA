const sequelize = require('../db.js');

const Achat = require('../src/models/achat.model');
const Activite = require('../src/models/activite.model');
const InfoPrestataire = require('../src/models/infoPrestataire.model');
const Role = require('../src/models/role.model');
const Stand = require('../src/models/stand.model');
const Tarif = require('../src/models/tarif.model');
const Token = require('../src/models/token.model');
const TypeActivite = require('../src/models/typeActivite.model');
const User = require('../src/models/user.model');

User.belongsTo(Role, {foreignKey: 'users_role'});

User.hasOne(InfoPrestataire, {foreignKey: 'userId'});



//todo: add foreign key


sequelize.sync({force: true}).then()
