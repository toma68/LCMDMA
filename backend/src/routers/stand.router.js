const Router = require("express").Router;
const Standcontroller = require("../controllers/stand.controller");

const router = Router();

router.get("/", Standcontroller.getAllStands);
router.get("/:id", Standcontroller.getStandById);
router.delete("/:id", Standcontroller.deleteStandById);
router.post("/", Standcontroller.createStand);
router.put("/:id", Standcontroller.updateStand);

module.exports = router;