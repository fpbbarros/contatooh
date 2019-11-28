const express = require('express');
const expressLoad = require('express-load');
const bodyParser = require('body-parser');



module.exports = function () {

  let app = express();

  //variaveis de ambiente
  app.set('port', 3333);


  //middleware
  app.use(express.static('../public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  expressLoad('models', { cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;

}