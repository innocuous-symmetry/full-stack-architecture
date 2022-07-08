const router = require('express').Router();

module.exports = (app) => {
    app.use('/drivers', router);

    router.get('/:id', (req, res) => {
        // get the driver with this id from the database
        const driver = '';
        if (!driver) throw new Error('no driver');
        res.status(200).send(driver);
    });
}