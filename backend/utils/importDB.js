const sequelize = require('../db.js');

const User = require('./user.model.js');
const Token = require('./token.model.js');

console.log("Importing database...");
// Create tables if they don't exist
sequelize.sync().then(r => {
    console.log('Tables created');
});

module.exports = {
    User,
    Token
};