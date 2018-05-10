const routes = require('express').Router();

function errorHandler(error, req, res, next) {
  if (error) {
    console.error(JSON.stringify({
      message: 'ERROR',
      err_message: error,
      err_stack: error.stack,
      ip: req.ip,
      method: req.method,
      route: req.originalUrl,
    }));
    res.status(500).send('Something broke!');
  }
  next();
}

routes.use('/api/*', (req, res) => {
  res.status(404).send({ err: null, code: 404 });
});
routes.use(errorHandler);


module.exports = routes;
