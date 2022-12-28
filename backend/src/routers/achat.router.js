const Router = require("express").Router;
const Achatcontroller = require("../controllers/achat.controller");
const auth = require("../../utils/auth");

const router = Router();


router.post("/",auth(3), Achatcontroller.createAchat);
/**
 * @swagger
 * /api/achats/: //TODO ajouter un moyen de s'authentifier (definir dans l'index) je comprends pas l'auth
 *  post:
 *      description: Utilisée pour ajouter un achat
 *      tags:
 *          - Achats
 *      parameters:
 *          - in: headers.authorization
 *            name: AuthorizationId
 *          - in: body
 *            name: Body Achat
 *            description: Achat à ajouter
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 tarifId:
 *                      type: integer
 *                 dateAchat:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 qrCode:
 *                      type: string
 *                 quantite:
 *                      type: integer
 *                 userId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: activity added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/", Achatcontroller.getAllAchats);
/**
 * @swagger
 * /api/achats:
 *   get:
 *      description: Permet de lister tous les achats
 *      tags:
 *          - Achats
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", Achatcontroller.getAchatById);
/**
 * @swagger
 * /api/achats/{achatId}:
 *   get:
 *      description: Permet de récupérer un achat par son id
 *      tags:
 *          - Achats
 *      parameters:
 *          - in: path
 *            name: achatId
 *            type: integer
 *            required: true
 *            description: Numeric ID of the achat to get
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", Achatcontroller.deleteAchatById);
/**
 * @swagger
 * /api/achats/{achatId}:
 *   delete:
 *      description: Permet de supprimer un achat par son id
 *      tags:
 *          - Achats
 *      parameters:
 *          - in: path
 *            name: achatId
 *            description: ID de l'achat à supprimer
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

router.put("/:id", Achatcontroller.updateAchat);
/**
 * @swagger
 * /api/achats/{achatId}:
 *  put:
 *      description: Utilisée pour modifier un achat
 *      tags:
 *          - Achats
 *      parameters:
 *          - in: path
 *            name: achatId
 *          - in: body
 *            name: Body Achat
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                tarifId:
 *                      type: integer
 *                 dateAchat:
 *                      type: string
 *                      format: date-time
 *                      example: 2020-01-01T00:00:00.000Z
 *                 qrCode:
 *                      type: string
 *                 quantite:
 *                      type: integer
 *                 userId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: activity updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;