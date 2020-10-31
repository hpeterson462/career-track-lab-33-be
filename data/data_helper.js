const fs = require('fs');
const pool = require('../lib/utils/pool');
const seed = require('./seed');
const request = require('supertest');
const app = require('../lib/app');

beforeEach(() => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
});

afterAll(() => pool.end());
beforeEach(() => {
  return seed();
});

const agent = request.agent(app);
beforeEach(() => {
  return agent
    .post('/api/v1/auth/login')
    .send({
      email: 'test1@test.com',
      password: 'password1'
    })
    .then(res => {
      console.log(res.body);
    });
});

module.exports = {
  getAgent: () => agent
};
