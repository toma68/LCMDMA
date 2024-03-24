const Router = require("express").Router;
const LivreDOrController = require("../controllers/livre-d-or.controller");
const auth = require("../../utils/auth");

const router = Router();

router.post("/",auth(1), LivreDOrController.createLivreDOrMessage);
/**
 * @swagger
 * /api/livre-d-or/:
 *  post:
 *      security :
 *          - Bearer: []
 *      description: Utilisée pour ajouter un message dans le livre d'or
 *      tags:
 *          - Livre d'or
 *      parameters:
 *          - in: body
 *            name: Body livre d'or
 *            description: description est le message et id est l'id de l'utilisateur
 *            schema:
 *                  type: object
 *                  properties:
 *                      contenuMessage:
 *                          type: string
 *                      noteMessage:
 *                          type: number
 *                      prestataire:
 *                          type: string
 *      responses:
 *          '200':
 *              description: activity added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *          '401':
 *              description: Unauthorized, token is missing or invalid
 */

router.get("/",auth(3), LivreDOrController.getAllLivreDOrMessages);
/**
 * @swagger
 * /api/livre-d-or/:
 *   get:
 *      security :
 *          - Bearer: []
 *      description: Permet de récupérer un livre d'or
 *      tags:
 *          - Livre d'or
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *          '401':
 *              description: Unauthorized, token is missing or invalid
 */

router.get("/:siret", LivreDOrController.getLivreDOrMessageById);
/**
 * @swagger
 * /api/livre-d-or/{siret}:
 *   get:
 *      description: Permet de récupérer le livre d'or d'un prestataire
 *      tags:
 *          - Livre d'or
 *      parameters:
 *          - in: path
 *            name: siret
 *            type: integer
 *            required: true
 *            description: Siret du prestataire dont on veut récupérer le livre d'or
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:siret", auth(1), LivreDOrController.deleteLivreDOrMessageById);
/**
 * @swagger
 * /api/livre-d-or/{siret}:
 *   delete:
 *      security :
 *          - Bearer: []
 *      description: Permet de supprimer un message du livre d'or par l'id du prestataire
 *      tags:
 *          - Livre d'or
 *      parameters:
 *          - in: path
 *            name: siret
 *            description: siret du prestataire
 *            required: true
 *            type: integer
 *      responses:
 *          '200':
 *              description: activity deleted successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *          '401':
 *              description: Unauthorized, token is missing or invalid
 */

router.put("/:siret", auth(1), LivreDOrController.updateLivreDOrMessage);
/**
 * @swagger
 * /api/livre-d-or/{siret}:
 *  put:
 *      security :
 *          - Bearer: []
 *      description: Utilisée pour modifier un message du livre d'or par l'id du prestataire
 *      tags:
 *          - Livre d'or
 *      parameters:
 *          - in: path
 *            name: siret
 *          - in: body
 *            name: Body livre d'or
 *            description: modifier le message
 *            schema:
 *              type: object
 *              properties:
 *                  contenuMessage:
 *                      type: string
 *      responses:
 *          '200':
 *              description: activity updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 *          '401':
 *              description: Unauthorized, token is missing or invalid
 */

module.exports = router;