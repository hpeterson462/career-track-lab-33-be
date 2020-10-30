const express = require('express');
const Route = require('./models/climbingRoutes');
const app = express();

app.use(express.json());

app.use('/api/v1/routes', require('./controllers/routes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
