const express = require('express');
const bodyParser = require('body-parser');



require('./utils/importDB');


//import des routes
const UserRoutes = require('./src/routers/user.router');
const AuthRoutes = require('./src/routers/auth.router');

const AchatRoutes = require('./src/routers/achat.router');
const ActiviteRoutes = require('./src/routers/activite.router');
const InfoPrestataireRoutes = require('./src/routers/infoPrestataire.router');
const StandRoutes = require('./src/routers/stand.router');
const TarifRoutes = require('./src/routers/tarif.router');
const TypeActiviteRoutes = require('./src/routers/typeActivite.router');




//--------Application

//Création de l'application
const app = express();
const port = process.env.PORT ||3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//logger des requêtes
app.use((req, res, next) => {
    console.log('Requête reçue à ' + new Date().toLocaleString() + ' : ' + req.method + ' ' + req.url + ' ' + JSON.stringify(req.body));
    next();
});

//mise en place des routes
app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);

app.use('/api/achats', AchatRoutes);
app.use('/api/activites', ActiviteRoutes);
app.use('/api/infoPrestataires', InfoPrestataireRoutes);
app.use('/api/stands', StandRoutes);
app.use('/api/tarifs', TarifRoutes);
app.use('/api/typeActivites', TypeActiviteRoutes);


//lancement de l'application
app.listen(port,()=>{
    console.log("http://localhost:"+port);
});