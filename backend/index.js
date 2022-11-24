const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./db');

User = require('./src/models/user.model');
Token = require('./src/models/token.model');


sequelize.sync({force: true}).then()










const app = express();
const port = process.env.PORT ||3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log("http://localhost:"+port);
});