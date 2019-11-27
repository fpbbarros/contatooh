const express = require('express');


module.exports = function() {
  let app = express();

  //variaveis de ambiente
  app.set('port', 3333);


  //middleware
  app.use(express.static('./public'));

  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //rotas

  return app;
  
}