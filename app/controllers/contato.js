let contatos = [

  { _id: 1, nome: "Manoel Pedro dos Santos Barros", email: "pedro@gmail.com" },
  { _id: 2, nome: "Railda Pereira Barros", email: "railda@gmail.com" },
  { _id: 3, nome: "Rafael Pereira Barros", email: "rafael@gmail.com" },
  { _id: 4, nome: "Fábio Pereira Barros", email: "fpbbarros@gmail.com" },
  { _id: 5, nome: "Juliana Pereira Barros", email: "juliana@gmail.com" },
  { _id: 6, nome: "Kiko fedinhas Pereira Barros", email: "kiko@gmail.com" },
];

module.exports = function () {
  var controller = {};
  controller.listaContatos = function (req, res) {
    res.status(200).json(contatos);
  };

  controller.salvaContato = function(req, res) {
    console.log("salva contato");
  }

  controller.obtemContato = function (req, res) {
    let contato = contatos.filter(function(contato) {
      return contato._id == req.params.id;
    })[0]; contato ? res.status(200).json(contato) : res.status(404).json({mensagem: "Contato não encontrado"});
  };


  controller.removeContato = function(req, res) {
    let idContato = req.params.id;
    contatos = contatos.filter(function(contato) {
      return contato._id != idContato;
    });
    res.send(204).end();
  }




  return controller;
}