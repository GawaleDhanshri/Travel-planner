// aiModule.js
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function generateItinerary(preferences) {
    const prompt = `
        You are a travel planner. Based on the user's preferences, create a 1-day travel itinerary:
        Location: ${preferences.location}
        Interests: ${preferences.interests}
        Budget: ${preferences.budget}
        Travel Date: ${preferences.travel_date}

        Provide details on the following:
        1. Places to visit
        2. Activities to do
        3. Restaurants to dine at
        4. Transport options
        5. A travel guide
    `;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }]
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error generating itinerary:', error);
        throw new Error('Failed to generate itinerary');
    }
}

module.exports = { generateItinerary };
