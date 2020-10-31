const { Router } = require('express');
const ensureAuth = require('../middleware/ensure-auth');
const Route = require('../models/climbingRoutes');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    Route
      .insert({ ...req.body, userId: req.user.userId })
      .then(route => res.send(route))
      .catch(next);
  })

  .get('/', ensureAuth, (req, res, next) => {
    Route
      .find(req.body)
      .then(routes => res.send(routes))
      .catch(next);
  })

  .get('/:id', ensureAuth, (req, res, next) => {
    Route
      .findById(req.params.id)
      .then(route => res.send(route))
      .catch(next);
  })

  .put('/:id', ensureAuth, (req, res, next) => {
    Route
      .update(req.params.id, req.body)
      .then(route => res.send(route))
      .catch(next);
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    Route
      .delete(req.params.id)
      .then(route => res.send(route))
      .catch(next);
  });
