const InfoPrestataireRouter = require("express").Router;
const InfoPrestataireController = require("../controllers/infoPrestataire.controller");

const router = InfoPrestataireRouter();

router.post("/", InfoPrestataireController.createAchat);
router.get("/:id", InfoPrestataireController.getAchatById);
router.delete("/:id", InfoPrestataireController.deleteAchatById);
router.put("/:id", InfoPrestataireController.updateAchat);
router.get("/", InfoPrestataireController.getAllAchats);

module.exports = router;