
angular.module('contatooh').controller('ContatosController',
  function ($scope) {
    $scope.total = 0;
    $scope.meuNome = "Fábio Pereira Barros";

    $scope.decrementa = () => {

      $scope.total--;
      if ($scope.total < 0) {
        $scope.total = 0;
      }
    }
    $scope.incrementa = () => {
      $scope.total++;
    };


    $scope.obj = {

      nome: "Fábio Barros",
      idade: 31,
      profissao: "programador",
      endereco: "Av Rangel Pestana",
      title: "Título do SITE"

    }

  });