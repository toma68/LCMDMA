const Router = require('express').Router;
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/', UserController.getAllUsers);
/**
 * @swagger
 * /api/users:
 *   get:
 *      description: Permet de lister tous les utilisateurs
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id', UserController.getUserById);
/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *      description: Permet de récupérer un utilsateur par son id
 *      tags:
 *          - Users
 *      parameters:
 *          - in: path
 *            name: userId
 *            type: integer
 *            required: true
 *            description: Id du user à récupérer
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.delete('/:id', UserController.deleteUserById);
/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *      description: Permet de supprimer un utilisateur par son id
 *      tags:
 *          - Users
 *      parameters:
 *          - in: path
 *            name: userId
 *            description: ID de l'utilisateur à supprimer
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: user deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put('/:id', UserController.updateUser);
/**
 * @swagger
 * /api/users/{userId}:
 *  put:
 *      description: Utilisée pour modifier un utilisateur
 *      tags:
 *          - Users
 *      parameters:
 *          - in: path
 *            name: userId
 *          - in: body
 *            name: Body Users
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              properties:
 *                 nom:
 *                      type: string
 *                 prenom:
 *                      type: string
 *                 login:
 *                      type: string
 *                 password:
 *                      type: string
 *                 email:
 *                      type: string
 *                 roleId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: user updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post('/', UserController.createUser);
/**
 * @swagger
 * /api/users/:
 *  post:
 *      description: Utilisée pour ajouter un utilisateur
 *      tags:
 *          - Users
 *      parameters:
 *          - in: body
 *            name: Body Utilisateur
 *            description: Compléter le body avec les informations de l'utilisateur
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 nom:
 *                      type: string
 *                 prenom:
 *                      type: string
 *                 login:
 *                      type: string
 *                 password:
 *                      type: string
 *                 email:
 *                      type: string
 *                 roleId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: user added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;