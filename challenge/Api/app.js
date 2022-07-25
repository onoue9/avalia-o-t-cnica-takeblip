require('dotenv').config()
const express = require('express');

const API_PORT = process.env.API_PORT || 3001;

class App {
    constructor(app = express()) {
        this.app = app;
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    startServer() {
        this.app.listen(API_PORT, () => console.log(`Server started on port ${API_PORT}`));
    }
}

module.exports = {
    App,
};
