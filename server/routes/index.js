const router = require('express').Router();

/**
 * The goal is to gather these bits of code that work on specific parts of the program,
 * gather them together so they can be streamlined and funneled into the next highest
 * section of the program. 
 */

module.exports = (app) => {
    app.use(require('./drivers'));
    app.use(require('./users'));

    return app;
}