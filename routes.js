// routes.js
const express = require('express');
const router = express.Router();
const { planItinerary } = require('./controllers/itineraryController');
const { savePreferences } = require('./controllers/preferencesController');

// Endpoint to save user preferences
router.post('/preferences', savePreferences);

// Endpoint to generate itinerary
router.post('/plan-itinerary', planItinerary);

module.exports = router;
