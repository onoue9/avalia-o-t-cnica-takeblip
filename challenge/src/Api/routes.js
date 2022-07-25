const express = require('express');
const { requestRoutes } = require('./Request/route/RequestRoute');

const routes = express.Router();

routes.use('/challenge', requestRoutes);

module.exports = routes;