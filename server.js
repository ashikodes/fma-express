const { app, router, apolloServerGraphQL } = require('./server/express');

const port = 4000;

app.use('/', router);

apolloServerGraphQL();

app.listen(port, () => {
  console.log('Listeninig on port', port);
});
