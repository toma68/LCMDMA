//auth.router

const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');


router.post('/login', authController.login);
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      description: Utilisée pour se login dans l'application
 *      tags:
 *          - Login et Register
 *      parameters:
 *          - in: body
 *            name: body Login
 *            description: Insérer les données nécessaire aux login dans le body
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 login:
 *                      type: string
 *                 password:
 *                      type: string
 *      responses:
 *          '200':
 *              description: activity added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post('/register', authController.register);
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      description: Ajouter un compte utilisateur ou un compte prestataire
 *      tags:
 *          - Login et Register
 *      parameters:
 *          - in: body
 *            name: Body register
 *            description: Compléter le body pour ajouter un utilisateur et l'inscrire en tant que prestataire. Si vous voulez juste l'ajouter en tant que utilisateur, supprimez les lignes à partir du "Siret"
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 login:
 *                      type: string
 *                 password:
 *                      type: string
 *                 nom:
 *                      type: string
 *                 prenom:
 *                      type: string
 *                 email:
 *                      type: string
 *                 siret:
 *                      type: string
 *                 pageMasque:
 *                      type: boolean
 *                 nomEntreprise:
 *                      type: string
 *                 description:
 *                      type: string
 *      responses:
 *          '200':
 *              description: User added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;