const Router = require("express").Router;
const ServicesController = require("../controllers/services.controller");
const auth = require("../../utils/auth");

const router = Router();

router.get("/",auth(2), ServicesController.getAllServices);

router.put("/:id",auth(2), ServicesController.updateServices);

router.get("/:id",auth(3), ServicesController.getServicesById);


module.exports = router;