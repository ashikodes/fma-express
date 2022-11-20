const { app, router } = require('../server/express');
const { server } = require('../prisma/schema');
const { context } = require('../prisma/context');
const { expressMiddleware } = require('@apollo/server/express4');
const serverless = require('serverless-http');

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

app.use('/.netlify/functions/app', router);
app.use(expressMiddleware(server, { context: () => context }));

module.exports.handler = serverless(app);
