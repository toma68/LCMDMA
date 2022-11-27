const express = require('express');
const bodyParser = require('body-parser');



require('./utils/importDB');
const insertData = require('./utils/insertData');
insertData()








const app = express();
const port = process.env.PORT ||3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port,()=>{
    console.log("http://localhost:"+port);
});