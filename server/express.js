const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('../prisma/schema').schema;
const context = require('../prisma/context').context;

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
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context,
    graphiql: true,
  })
);

module.exports = {
  app,
  router,
};
