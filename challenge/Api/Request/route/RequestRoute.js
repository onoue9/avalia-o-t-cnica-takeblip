const express = require('express');
const { RequestController } = require('../controller/RequestController');

const requestController = new RequestController();

const requestRoutes = express.Router();

requestRoutes.get('/', (req, res) => requestController.getTheFiveOldestCSharpRepositories(req, res));

module.exports = { requestRoutes };