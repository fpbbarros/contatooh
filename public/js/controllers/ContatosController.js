
angular.module('contatooh').controller('ContatosController',
  function ($scope) {
    $scope.total = 0;
    $scope.meuNome = "Fábio Pereira Barros";

    $scope.incrementa = function () {
      $scope.total++;
    };


    

    $scope.obj = {
      nome: "fábio Barros",
      idade: 31,
      profissao: "programador",
      endereco: "Av Rangel Pestana"
    }



    
  });