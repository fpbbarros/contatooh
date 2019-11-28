const express = require('express');
const expressLoad = require('express-load');
const homeRoutes = require('../app/routes/home');

module.exports = function () {

  let app = express();

  //variaveis de ambiente
  app.set('port', 3333);


  //middleware
  app.use(express.static('../public'));

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  expressLoad('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);


  //rotas

  return app;

}