const router = require('express').Router();

module.exports = (app) => {
    app.use('/users', router);

    router.get('/:id', (req, res) => {
        // get the user with this id from the database
        const user = '';
        if (!user) throw new Error('no user');
        res.status(200).send(user);
    });
}