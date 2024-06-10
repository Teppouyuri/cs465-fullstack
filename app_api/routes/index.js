const express = require('express');
const router = express.Router();

const tripsController = require('/Users/thanhnguyen/Desktop/travlr/app_api/controllers/trips.js');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
    
module.exports = router;