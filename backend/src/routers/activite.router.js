const Router = require("express").Router;
const Activitecontroller = require("../controllers/activite.controller");

const router = Router();

router.get("/", Activitecontroller.getAllActivites);
router.get("/:id", Activitecontroller.getActiviteById);
router.delete("/:id", Activitecontroller.deleteActiviteById);
router.post("/", Activitecontroller.createActivite);
router.put("/:id", Activitecontroller.updateActivite);

module.exports = router;
