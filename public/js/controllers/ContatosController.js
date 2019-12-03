
angular.module('contatooh').controller('ContatosController',
  function ($scope, $resource, ) {

    $scope.contatos = [];
    $scope.filtro = '';
    $scope.total = 0;

    let Contato = $resource('/contatos');

    function buscaContatos() {
      Contato.query(function (contatos) { $scope.contatos = contatos }, function (erro) {
        console.log("Não foi possível obter a lista de contatos");
        console.log(erro);
      });
    }
    buscaContatos();

  });