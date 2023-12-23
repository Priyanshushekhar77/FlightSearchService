const express = require('express');
const cityController = require('../../controllers/city-cont');

const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.patch('/city/:id',cityController.update);//error in missing /
router.get('/city',cityController.getAllCity)


module.exports = router;