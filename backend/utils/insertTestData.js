import User from "../src/models/user.model";

//----------INSERT USERS----------//

//Admin
const ambert = await User.create({login: 'ambert', password: 'pwdambert', roleId: 3, nom: 'Ambert', prenom: 'Fabrice', email: 'seigneur.ambert@scroll.old'});
const domas = await User.create({login: 'domas', password: 'pwddomas', roleId: 3, nom: 'Domas', prenom: 'Jean', email: 'chevalier.domas@scroll.old'});
//Prestataire
const eorlound = await User.create({login: 'Forgeciel', password: 'pwdForgeciel', roleId: 2, nom: 'Erlound', prenom: 'Grisetoison', email: 'forgeciel@gmail.com'});
const overwolf = await User.create({login: 'Curseforge', password: 'pwdCurseforge', roleId: 2, nom: 'Overwolf', prenom: 'Benoit', email: 'curseforge@orange.fr'});
const copain = await User.create({login: 'Potofeu', password: 'pwdPotofeu', roleId: 2, nom: 'Copain', prenom: 'Jean', email: 'potofeucopain@wanadoo.fr'});
const dansage = await User.create({login: 'Dansage', password: 'pwdDansage', roleId: 2, nom: 'Bailar', prenom: 'Pablo', email: 'pablo.bailar@zimbra.fr'});
//User
const bolmont = await User.create({login: 'Bolmont', password: 'pwdBolmont', roleId: 1, nom: 'Bolmont', prenom: 'Hugo', email: 'hugo.bolmont@protonmail.com'});
const basquin = await User.create({login: 'Basquin', password: 'pwdBasquin', roleId: 1, nom: 'Basquin', prenom: 'Nicolas', email: 'nicolas.basquin@gmail.com'});
const parme = await User.create({login: 'Parme', password: 'pwdParme', roleId: 1, nom: 'Parme', prenom: 'Simon', email: 'simon.parme@gmail.com'});


//----------INSERT STANDS----------//
const stand1 = await Stand.create({surface: 20, logistique: 'eau, electricite'});
const stand2 = await Stand.create({surface: 15, logistique: 'eau, electricite'});
const stand3 = await Stand.create({surface: 10, logistique: 'electricite'});
const stand4 = await Stand.create({surface: 15, logistique: 'eau, electricite'});
const stand5 = await Stand.create({surface: 10, logistique: 'rien'});

//----------INSERT ACTIVITE----------//
