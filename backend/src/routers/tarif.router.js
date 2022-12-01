const Router = require('express').Router;
const TarifController = require('../controllers/tarif.controller');

const router = Router();

router.post('/', TarifController.createTarif);
router.get('/:id', TarifController.getTarifById);
router.delete('/:id', TarifController.deleteTarifById);
router.put('/:id', TarifController.updateTarif);
router.get('/', TarifController.getAllTarifs);

module.exports = router;