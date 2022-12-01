const AchatRouter = require("express").Router;
const Achatcontroller = require("../controllers/achat.controller");

const router = AchatRouter();

router.post("/", Achatcontroller.createAchat);
router.get("/:id", Achatcontroller.getAchatById);
router.delete("/:id", Achatcontroller.deleteAchatById);
router.put("/:id", Achatcontroller.updateAchat);
router.get("/", Achatcontroller.getAllAchats);

module.exports = router;