const InfoPrestataireRouter = require("express").Router;
const InfoPrestataireController = require("../controllers/infoPrestataire.controller");
const auth = require("../../utils/auth");

const router = InfoPrestataireRouter();

router.get("/", InfoPrestataireController.getAllInfoPrestataires);
/**
 * @swagger
 * /api/infoPrestataires:
 *   get:
 *      description: Permet de lister toutes les infos sur les prestataires
 *      tags:
 *          - Infos Prestataires
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", InfoPrestataireController.getInfoPrestataireById);
/**
 * @swagger
 * /api/infoPrestataires/{siret}:
 *   get:
 *      description: Permet de récupérer une Info prestataire par son siret
 *      tags:
 *          - Infos Prestataires
 *      parameters:
 *          - in: path
 *            name: siret
 *            type: integer
 *            required: true
 *            description: siret du prestataire à récupérer les infos
 *      responses:
 *          '200':
 *              description: Resource receive successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", auth(3), InfoPrestataireController.deleteInfoPrestataireById);
/**
 * @swagger
 * /api/infoPrestataires/{siret}:
 *   delete:
 *      description: Permet de supprimer les infos d'un prestataire par son siret
 *      tags:
 *          - Infos Prestataires
 *      parameters:
 *          - in: path
 *            name: siret
 *            description: siret du prestataire à supprimer les infos
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


router.put("/:id",auth(2), InfoPrestataireController.updateInfoPrestataire);
/**
 * @swagger
 * /api/infoPrestataires/{siret}:
 *  put:
 *      description: Utilisée pour modifier les infos d'un prestataire
 *      tags:
 *          - Infos Prestataires
 *      parameters:
 *          - in: path
 *            name: siret
 *          - in: body
 *            name: Body infos prestataire
 *            description: Remplir uniquement les champs à modifier (supprimer les lignes des champs non modifiés)
 *            schema:
 *              type: object
 *              properties:
 *                 contenuPage:
 *                      type: string
 *                 pageMasque:
 *                      type: boolean
 *                 nomEntreprise:
 *                      type: string
 *                 description:
 *                      type: string
 *                 userId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: info updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


router.post("/", InfoPrestataireController.createInfoPrestataire);
/**
 * @swagger
 * /api/infoPrestataires/:
 *  post:
 *      description: Utilisée pour ajouter les infos d'un prestataire
 *      tags:
 *          - Infos Prestataires
 *      parameters:
 *          - in: body
 *            name: InfoPrestataire
 *            description: Informations prestataire à ajouter
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *              properties:
 *                 numeroSiret:
 *                      type: string
 *                 contenuPage:
 *                      type: string
 *                 pageMasque:
 *                      type: boolean
 *                 nomEntreprise:
 *                      type: string
 *                 description:
 *                      type: string
 *                 userId:
 *                      type: integer
 *      responses:
 *          '200':
 *              description: info added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */


module.exports = router;