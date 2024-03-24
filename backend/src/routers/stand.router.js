const Router = require("express").Router;
const Standcontroller = require("../controllers/stand.controller");

const router = Router();

router.get("/", Standcontroller.getAllStands);
/**
 * @swagger
 * /api/stands:
 *   get:
 *      description: Permet de lister toutes les stands
 *      tags:
 *          - Stands
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", Standcontroller.getStandById);
/**
 * @swagger
 * /api/stands/{standId}:
 *   get:
 *      description: Permet de récupérer un stand par son id
 *      tags:
 *          - Stands
 *      parameters:
 *          - in: path
 *            name: standId
 *            type: integer
 *            required: true
 *            description: ID du stand à récupérer
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", Standcontroller.deleteStandById);
/**
 * @swagger
 * /api/stands/{standId}:
 *   delete:
 *      description: Permet de supprimer un stand par son id
 *      tags:
 *          - Stands
 *      parameters:
 *          - in: path
 *            name: standId
 *            description: ID du stand à supprimer
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: stand deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post("/", Standcontroller.createStand);
/**
 * @swagger
 * /api/stands/:
 *  post:
 *      description: Utilisée pour ajouter un stand
 *      tags:
 *          - Stands
 *      parameters:
 *          - in: body
 *            name: nomActivite
 *            description: Nom de l'activite à ajouter
 *            schema:
 *              type: object
 *              properties:
 *                 surface:
 *                      type: number
 *                 logistique:
 *                      type: string
 *      responses:
 *          '200':
 *              description: stand added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/:id", Standcontroller.updateStand);
/**
 * @swagger
 * /api/stands/{standId}:
 *  put:
 *      description: Utilisée pour modifier un stand
 *      tags:
 *          - Stands
 *      parameters:
 *          - in: path
 *            name: standId
 *          - in: body
 *            name: Body stands
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              properties:
 *                 surface:
 *                      type: number
 *                 logistique:
 *                      type: string
 *      responses:
 *          '200':
 *              description: stand updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;