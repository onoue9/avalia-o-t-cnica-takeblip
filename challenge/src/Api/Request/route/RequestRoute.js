const express = require('express');
const { RequestController } = require('../controller/RequestController');

const requestController = new RequestController();

const requestRoutes = express.Router();

requestRoutes.get('/:id', (req, res) => requestController.getByIdTheCSharpRepository(req, res));

module.exports = { requestRoutes };