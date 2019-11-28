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
    console.log("aui");
    res.json(contatos);
    
  };
  
  console.log(controller);
  return controller;
}