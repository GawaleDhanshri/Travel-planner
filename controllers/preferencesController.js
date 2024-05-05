// controllers/preferencesController.js
const pool = require('../database');

async function savePreferences(req, res) {
    const { location, interests, budget, travel_date } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO user_inputs (location, interests, budget, travel_date) VALUES (?, ?, ?, ?)',
            [location, interests, budget, travel_date]
        );
        res.status(201).json({ success: true, message: 'Preferences saved', id: result.insertId });
    } catch (error) {
        console.error('Error saving preferences:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = { savePreferences };
