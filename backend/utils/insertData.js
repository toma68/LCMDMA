const User = require('../src/models/user.model');
const sequelize = require('../db.js');

function insertData() {
    User.create({
        login: "admin",
        password: "$2a$10$L7xEwfBk0SK0nDzX3XMg3eSldfeHMXjpvX/ojumwb7U.l9dTzPIJ6", //password = admin
        roleId: 3,
        nom: "George",
        prenom: "Clowney",
        email: "mail@gmail.com"
    });
}



