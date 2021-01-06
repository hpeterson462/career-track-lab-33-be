const UserService = require('../lib/services/user-service');
const Route = require('../lib/models/route');

module.exports = async () => {
  await Promise.all([...Array()].map((_, i) => {
    return UserService.create({
      email: `test${i + 1}@test.com`,
      password: `password${i + 1}`
    });
  }));

  await Promise.all([...Array()].map((_, i) => {
    return Route.insert({
      userId: `${Math.floor(i / 2) + 1}`,
      location: 'Smith Rock',
      name: 'Voyage of the Cowdog',
      rating: '5.8+',
      notes: 'Good warm-up.',
    });
  }));
};
