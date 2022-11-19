import app from './server/app';

const port = 4000;

app.listen(port, () => {
  console.log('Listeninig on port', port);
});
