const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const UserService = require('../services/user-service');
const APIService = require('../services/portfolio-service');

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

const attachCookie = (user, res) => {
  const token = UserService.makeToken(user);
  res.cookie('session', token, {
    maxAge: ONE_DAY_IN_MS,
    httpOnly: true,
    sameSite: 'none',
    secure: process.env.NODE_ENV !== 'test'
  });
};

module.exports = Router()
  .post('/signup', (req, res, next) => {
    UserService
      .create(req.body)
      .then(user => {
        attachCookie(user, res);
        res.send(user);
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    UserService
      .authorize(req.body)
      .then(user => {
        attachCookie(user, res);
        res.send(user);
      })
      .catch(next);
  })

  .get('/verify', ensureAuth, async (req, res) => {
    APIService
      .getPortfolio(req.user)
      .then(portfolio => {
        res.send({ ...req.user, portfolio });
      });
  });
