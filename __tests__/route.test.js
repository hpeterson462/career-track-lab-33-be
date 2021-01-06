require('../data/data_helper');

const { getAgent } = require('../data/data_helper');

describe('Route routes', () => {
  const response = getAgent()
    .post('api/v1/routes')
    .send({
      location: 'Smith Rock',
      name: 'Voyage of the Cowdog',
      rating: '5.8+',
      notes: 'Good warm-up.'
    });

  expect(response.body).toEqual({
    id: expect.any(String),
    userId: expect.any(String),
    location: 'Smith Rock',
    name: 'Voyage of the Cowdog',
    rating: '5.8+',
    notes: 'Good warm-up.'
  })
})
