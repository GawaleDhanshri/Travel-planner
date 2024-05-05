// controllers/itineraryController.js
const { generateItinerary } = require('../aiModule');

async function planItinerary(req, res) {
    const { location, interests, budget, travel_date } = req.body;

    try {
        const itinerary = await generateItinerary({ location, interests, budget, travel_date });
        res.json({ itinerary });
    } catch (error) {
        console.error('Error generating itinerary:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = { planItinerary };
