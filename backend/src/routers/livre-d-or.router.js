const Router = require("express").Router;
const LivreDOrController = require("../controllers/livre-d-or.controller");
const auth = require("../../utils/auth");

const router = Router();

router.post("/",auth(1), LivreDOrController.createLivreDOrMessage);

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
 */

router.get("/:id", LivreDOrController.getLivreDOrMessageById);

router.delete("/:id", auth(1), LivreDOrController.deleteLivreDOrMessageById);

router.put("/:id", auth(1), LivreDOrController.updateLivreDOrMessage);

module.exports = router;