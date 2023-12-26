const express = require('express');
const cityController = require('../../controllers/city-cont');
const flightController = require('../../controllers/flight_controller');
const airportController = require('../../controllers/airport_controller');

const router = express.Router();
//for city
router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.patch('/city/:id',cityController.update);//
router.get('/city',cityController.getAllCity)
//for flight
router.post('/flights',flightController.create);
router.get('/flights/:id',flightController.getFlight);
router.get('/flights',flightController.getAllFlight);
router.patch('/flight/:id',flightController.updateFlight);
//for airport
router.post('/airport',airportController.create);


module.exports = router;