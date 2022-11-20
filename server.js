const { app, router } = require('./server/express');

const port = 4000;

app.use('/', router);

app.listen(port, () => {
  console.log('Listeninig on port', port);
});
