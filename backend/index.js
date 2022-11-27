const express = require('express');
const bodyParser = require('body-parser');



require('./utils/importDB');


//import des routes
const UserRoutes = require('./src/routers/users.router');
const AuthRoutes = require('./src/routers/auth.router');



//--------Application

//Création de l'application
const app = express();
const port = process.env.PORT ||3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logger des requêtes
app.use((req, res, next) => {
    console.log('Requête reçue à ' + new Date().toLocaleString() + ' : ' + req.method + ' ' + req.url + ' ' + JSON.stringify(req.body));
    next();
});

//mise en place des routes
app.use('/api/auth', AuthRoutes);


//lancement de l'application
app.listen(port,()=>{
    console.log("http://localhost:"+port);
});