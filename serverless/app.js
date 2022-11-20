const serverless = require('serverless-http');
const { app, router } = require('../server/express');

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);
