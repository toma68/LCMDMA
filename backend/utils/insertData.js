const User = require('../src/models/user.model');
const sequelize = require('../db.js');
const Role = require("../src/models/role.model");

function insertData() {
    Role.create({
        id: 1,
        libelle: "User"
    })
        .then(() => {
            Role.create({
                id: 2,
                libelle: "Prestataire"
            })
                .then(() => {
                    Role.create({
                        id: 3,
                        libelle: "Admin"
                    })
                        .then(() => {

                            User.create({
                                login: "admin",
                                password: "$2a$10$L7xEwfBk0SK0nDzX3XMg3eSldfeHMXjpvX/ojumwb7U.l9dTzPIJ6", //password = admin
                                roleId: 3,
                                nom: "George",
                                prenom: "Clowney",
                                email: "mail@gmail.com"
                            });
                        });
                });
        });

}

module.exports = insertData;



