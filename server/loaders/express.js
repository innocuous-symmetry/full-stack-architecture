require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');

module.exports = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(session({
        // session details
    }))

    return app;
}