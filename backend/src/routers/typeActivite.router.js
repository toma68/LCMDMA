const Router = require("express").Router;
const TypeActivitecontroller = require("../controllers/typeActivite.controller");

const router = Router();

router.get("/", TypeActivitecontroller.getAllTypeActivites);
router.get("/:id", TypeActivitecontroller.getTypeActiviteById);
router.delete("/:id", TypeActivitecontroller.deleteTypeActiviteById);
router.post("/", TypeActivitecontroller.createTypeActivite);
router.put("/:id", TypeActivitecontroller.updateTypeActivite);

module.exports = router;
