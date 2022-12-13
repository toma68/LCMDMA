const Router = require("express").Router;
const TypeActivitecontroller = require("../controllers/typeActivite.controller");

const router = Router();

router.get("/", TypeActivitecontroller.getAllTypeActivites);
/**
 * @swagger
 * /api/typeActivites:
 *   get:
 *      description: Permet de lister tout les types d'activités
 *      tags:
 *          - Type activités
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", TypeActivitecontroller.getTypeActiviteById);
/**
 * @swagger
 * /api/typeActivites/{typeActiviteId}:
 *   get:
 *      description: Permet de récupérer un type d'activité par son id
 *      tags:
 *          - Type activités
 *      parameters:
 *          - in: path
 *            name: typeActiviteId
 *            type: integer
 *            required: true
 *            description: ID du type d'activité à récupérer
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", TypeActivitecontroller.deleteTypeActiviteById);
/**
 * @swagger
 * /api/typeActivites/{typeActiviteId}:
 *   delete:
 *      description: Permet de supprimer un typre d'activité par son id
 *      tags:
 *          - Type activités
 *      parameters:
 *          - in: path
 *            name: typeActiviteId
 *            description: ID du type d'activité à supprimer
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: activity type deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/", TypeActivitecontroller.createTypeActivite);
/**
 * @swagger
 * /api/typeActivites/:
 *  post:
 *      description: Utilisée pour ajouter un type d'activité
 *      tags:
 *          - Type activités
 *      parameters:
 *          - in: body
 *            name: nomTypeActivite
 *            description: Nom de l'activité à ajouter
 *            schema:
 *              type: object
 *              required:
 *                  - libelle
 *              properties:
 *                 libelle:
 *                      type: string
 *      responses:
 *          '200':
 *              description: activity type added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.put("/:id", TypeActivitecontroller.updateTypeActivite);
/**
 * @swagger
 * /api/typeActivites/{typeActiviteId}:
 *  put:
 *      description: Utilisée pour modifier une activité
 *      tags:
 *          - Type activités
 *      parameters:
 *          - in: path
 *            name: typeActiviteId
 *          - in: body
 *            name: Body typeActivité
 *            description: Modifier le nom du type d'activité
 *            schema:
 *              type: object
 *              required:
 *                  - libelle
 *              properties:
 *                 libelle:
 *                      type: string
 *      responses:
 *          '200':
 *              description: activity updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
