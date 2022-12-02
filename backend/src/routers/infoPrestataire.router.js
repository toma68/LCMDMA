const InfoPrestataireRouter = require("express").Router;
const InfoPrestataireController = require("../controllers/infoPrestataire.controller");

const router = InfoPrestataireRouter();

router.get("/", InfoPrestataireController.getAllInfoPrestataires);
router.get("/:id", InfoPrestataireController.getInfoPrestataireById);
router.delete("/:id", InfoPrestataireController.deleteInfoPrestataireById);
router.put("/:id", InfoPrestataireController.updateInfoPrestataire);
router.get("/", InfoPrestataireController.createInfoPrestataire);

module.exports = router;