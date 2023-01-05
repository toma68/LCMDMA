const Router = require("express").Router;
const Achatcontroller = require("../controllers/achat.controller");
const auth = require("../../utils/auth");

const router = Router();





router.post("/",auth(1), Achatcontroller.createAchat);
router.get("/:id", Achatcontroller.getAchatById);
router.delete("/:id", Achatcontroller.deleteAchatById);
router.put("/:id", Achatcontroller.updateAchat);
router.get("/", Achatcontroller.getAllAchats);
router.get("/user/:id", Achatcontroller.getAchatsByUserId);

module.exports = router;