angular.module('contatooh').controller('ContatoController',

  function ($scope, $routeParams) {
    $scope.remove = function (contato) {
      console.log(contato);
    }
  });