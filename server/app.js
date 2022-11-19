import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';

import { graphqlHTTP } from 'express-graphql';

import { schema } from '../prisma/schema';
import { context } from '../prisma/context';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

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

export default app;
