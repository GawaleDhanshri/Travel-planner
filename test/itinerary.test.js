// itinerary.test.js
const request = require('supertest');
const app = require('../app');

describe('Itinerary Generation API', () => {
    it('should generate an itinerary based on user preferences', async () => {
        const response = await request(app)
            .post('/api/plan-itinerary')
            .send({
                location: 'New York',
                interests: 'museums, parks',
                budget: 'medium',
                travel_date: '2024-06-01'
            })
            .expect(200);

        expect(response.body).toHaveProperty('itinerary');
    });
});


