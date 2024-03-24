const Router = require('express').Router;
const TarifController = require('../controllers/tarif.controller');

const router = Router();

router.get('/', TarifController.getAllTarifs);
/**
 * @swagger
 * /api/tarifs:
 *   get:
 *      description: Permet de lister tous les tarifs
 *      tags:
 *          - Tarifs
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get('/:id', TarifController.getTarifById);
/**
 * @swagger
 * /api/tarifs/{tarifId}:
 *   get:
 *      description: Permet de récupérer un tarif par son id
 *      tags:
 *          - Tarifs
 *      parameters:
 *          - in: path
 *            name: tarifId
 *            type: integer
 *            required: true
 *            description: Id du tarif à récupérer
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete('/:id', TarifController.deleteTarifById);
/**
 * @swagger
 * /api/tarifs/{tarifId}:
 *   delete:
 *      description: Permet de supprimer un stand par son id
 *      tags:
 *          - Tarifs
 *      parameters:
 *          - in: path
 *            name: tarifId
 *            description: ID du tarif à supprimer
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: tarif deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.put('/:id', TarifController.updateTarif);
/**
 * @swagger
 * /api/tarifs/{tarifId}:
 *  put:
 *      description: Utilisée pour modifier un tarif
 *      tags:
 *          - Tarifs
 *      parameters:
 *          - in: path
 *            name: tarifId
 *          - in: body
 *            name: Body Tarif
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              properties:
 *                 libelle:
 *                      type: string
 *                 prix:
 *                      type: number
 *      responses:
 *          '200':
 *              description: tarif updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post('/', TarifController.createTarif);
/**
 * @swagger
 * /api/tarifs/:
 *  post:
 *      description: Utilisée pour ajouter un tarif
 *      tags:
 *          - Tarifs
 *      parameters:
 *          - in: body
 *            name: tarif
 *            description: Compléter le body pour ajouter un tarif
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 libelle:
 *                      type: string
 *                 prix:
 *                      type: number
 *      responses:
 *          '200':
 *              description: tarif added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;