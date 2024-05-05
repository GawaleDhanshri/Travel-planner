const axios = require('axios');

const fetchLocationData = async (keyword, location) => {
    try {
        const googleMapsResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
            params: {
                key: process.env.GOOGLE_MAPS_API_KEY,
                location: location,
                radius: '5000',
                keyword: keyword
            }
        });

        return googleMapsResponse.data.results;
    } catch (error) {
        console.error('Error fetching location data:', error);
        return [];
    }
};

module.exports = { fetchLocationData };
