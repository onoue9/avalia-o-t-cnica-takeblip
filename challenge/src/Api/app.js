require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const path = require('path');

const { PORT } = process.env || 3001;

class App {
    constructor(app = express()) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(routes);
        this.app.use(express.static('public'));
    }

    async startServer() {
        this.app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }
}

module.exports = { App };
