// const axios = require('axios');
// // Load environment variables
// require('dotenv').config();


// exports.getNearbyPlaces = async function(latitude, longitude, type) {
//     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
//     const params = {
//         location: `${latitude},${longitude}`,
//         radius: 1000,
//         type: type,
//         key: process.env.GOOGLE_MAPS_API_KEY
//     };
//     try {
//         const response = await axios.get(url, { params });
//         return response.data.results;
//     } catch (error) {
//         console.error('Error fetching Google Maps data:', error);
//         return [];
//     }
// };

// googleMapsService.js
const axios = require('axios');
require('dotenv').config();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

async function getNearbyPlaces(location, type) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
    const params = {
        location: location,
        radius: 1000,
        type: type,
        key: GOOGLE_MAPS_API_KEY
    };

    try {
        const response = await axios.get(url, { params });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data from Google Maps:', error);
        return [];
    }
}

module.exports = { getNearbyPlaces };

