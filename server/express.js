const express = require('express');
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const { server } = require('../prisma/schema');
const { context } = require('../prisma/context');

const app = express();
const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apolloServerGraphQL = () => {
  server.start().then(() => {
    app.use('/graphql', expressMiddleware(server, { context: () => context }));
  });
};

module.exports = {
  app,
  router,
  apolloServerGraphQL,
};
