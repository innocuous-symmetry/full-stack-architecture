const expressLoader = require('./express');
const passportLoader = require('./passport');
const apiLoader = require('./api');

// app is passed in from 'index.js' at the server directory level
module.exports = async (app) => {
    const express = await expressLoader(app);
    const passport = await passportLoader(express);

    // we may include passport here to assist with user auth flows
    await apiLoader(app, passport);
}