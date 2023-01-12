const sequelize = require('../db.js');


const Offre = require('../src/models/offre.model.js');
const Achat = require('../src/models/achat.model');
const Activite = require('../src/models/activite.model');
const InfoPrestataire = require('../src/models/infoPrestataire.model');
const Role = require('../src/models/role.model');
const Stand = require('../src/models/stand.model');
const Tarif = require('../src/models/tarif.model');
const Token = require('../src/models/token.model');
const TypeActivite = require('../src/models/typeActivite.model');
const User = require('../src/models/user.model');
const LivreDOr = require('../src/models/livre-d-or.model');
const Services = require('../src/models/services.model');

// One-to-Many Join

User.belongsTo(Role, {foreignKey: 'roleId'});

Token.belongsTo(User, {foreignKey: 'userId'});

Achat.belongsTo(Tarif, {foreignKey: 'tarifId'});
Achat.belongsTo(User, {foreignKey: 'userId'});

LivreDOr.belongsTo(User, {foreignKey: 'posterId'});
LivreDOr.belongsTo(InfoPrestataire, {foreignKey: 'receiverSiret'});


User.hasOne(InfoPrestataire, {foreignKey: 'userId'});
InfoPrestataire.belongsTo(User, {foreignKey: 'userId'});


Activite.belongsTo(Stand, {foreignKey: 'standId'});
Activite.belongsTo(TypeActivite, {foreignKey: 'typeActiviteId'});
Activite.belongsTo(InfoPrestataire, {foreignKey: 'infoPrestataireId'});

InfoPrestataire.belongsTo(Stand, {foreignKey: 'standId'});
//Many-To-Many Join

User.belongsToMany(Activite, {through: 'reserve'});
Activite.belongsToMany(User, {through: 'reserve'});

InfoPrestataire.belongsToMany(Activite, {through: 'organise'});
Activite.belongsToMany(InfoPrestataire, {through: 'organise'});

InfoPrestataire.belongsToMany(Services, {through: 'offre'});
Services.belongsToMany(InfoPrestataire, {through: 'offre'});



sequelize.sync({alter: true, force: false})
    .then(() => {
        console.log("Tables created");
        //insertData();
    })
