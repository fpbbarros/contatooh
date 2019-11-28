module.exports = function (app) {

  let controller = app.controllers.contato;
  app.get('/contato', controller.listaContatos);

}