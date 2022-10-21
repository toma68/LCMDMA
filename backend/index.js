import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv"


import express from "express";
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//router.get('/', fonction);



app.listen(port,()=>{
    console.log("Le serveur ecoute sur port " + port);
});