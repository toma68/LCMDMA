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
const LivreDOrRoutes = require('./src/routers/livre-d-or.router');
const ServicesRoutes = require('./src/routers/services.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


//--------Application

//Création de l'application
const app = express();
const port = process.env.PORT ||3000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//logger des requêtes
app.use((req, res, next) => {
    console.log('#######')
    console.log('Requête reçue à ' + new Date().toLocaleString() + ' : ' + req.method + ' ' + req.url + ' ' + JSON.stringify(req.body));

    next();
});


/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsDoc.Options = {
        info: {
            title: "LCMDMA app",
            description: "API documentation",
            contact: {
                name: "Raphael",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js", "./src/routers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOption);



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//mise en place des routes
app.use('/api/auth', AuthRoutes);
app.use('/api/users', UserRoutes);

app.use('/api/achats', AchatRoutes);
app.use('/api/activites', ActiviteRoutes);
app.use('/api/infoPrestataires', InfoPrestataireRoutes);
app.use('/api/stands', StandRoutes);
app.use('/api/tarifs', TarifRoutes);
app.use('/api/typeActivites', TypeActiviteRoutes);
app.use('/api/livre-d-or', LivreDOrRoutes);
app.use('/api/services', ServicesRoutes);

//lancement de l'application
app.listen(port,()=>{
    console.log("http://localhost:"+port);
});