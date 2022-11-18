import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';

import { graphqlHTTP } from 'express-graphql';

import { schema } from './src/schema';
import { context } from './src/context';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context,
    graphiql: true,
  })
);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log('Listeninig on port', port);
});
