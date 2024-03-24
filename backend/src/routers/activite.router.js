const Router = require("express").Router;
const Activitecontroller = require("../controllers/activite.controller");

const router = Router();

router.get("/", Activitecontroller.getAllActivites);
/**
 * @swagger
 * /api/activites:
 *   get:
 *      description: Permet de lister toutes les activités
 *      tags:
 *          - activités
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/stand", Activitecontroller.getActiviteStand);
/**
 * @swagger
 * /api/activites/stand:
 *  get:
 *      description: Utilisée pour récupérer les activités d'un stand
 *      tags:
 *          - activités
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *
 */

router.get("/:id", Activitecontroller.getActiviteById);
/**
 * @swagger
 * /api/activites/{activiteId}:
 *   get:
 *      description: Permet de récupérer une activité par son id
 *      tags:
 *          - activités
 *      parameters:
 *          - in: path
 *            name: activiteId
 *            type: integer
 *            required: true
 *            description: Numeric ID of the activite to get
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", Activitecontroller.deleteActiviteById);
/**
 * @swagger
 * /api/activites/{activiteId}:
 *   delete:
 *      description: Permet de supprimer une activité par son id
 *      tags:
 *          - activités
 *      parameters:
 *          - in: path
 *            name: activiteId
 *            description: ID de l'activité à supprimer
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: activity deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/", Activitecontroller.createActivite);
/**
 * @swagger
 * /api/activites/:
 *  post:
 *      description: Utilisée pour ajouter une activité
 *      tags:
 *          - activités
 *      parameters:
 *          - in: body
 *            name: nomActivite
 *            description: Nom de l'activite à ajouter
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 nom:
 *                      type: string
 *                 heureDebut:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 heureFin:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 description:
 *                      type: string
 *                 typeActiviteId:
 *                      type: integer
 *                 standId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: activity added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/:id", Activitecontroller.updateActivite);
/**
 * @swagger
 * /api/activites/{activiteId}:
 *  put:
 *      description: Utilisée pour modifier une activité
 *      tags:
 *          - activités
 *      parameters:
 *          - in: path
 *            name: activiteId
 *          - in: body
 *            name: Body Activité
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 nom:
 *                      type: string
 *                 heureDebut:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 heureFin:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 description:
 *                      type: string
 *                 typeActiviteId:
 *                      type: integer
 *                 standId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: activity updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/prestataire/:id", Activitecontroller.getActiviteByPrestataire);


module.exports = router;
