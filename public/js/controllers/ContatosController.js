
angular.module('contatooh').controller('ContatosController',
  function ($scope) {


    $scope.filtro = "";

    $scope.contatos = [
      {
        "_id": 1,
        "nome": "Contato Angular 1",
        "email": "cont1@empresa.com.br"
      },
      {
        "_id": 2,
        "nome": "Contato Angular 2",
        "email": "cont2@empresa.com.br"
      },
      {
        "_id": 3,
        "nome": "Contato Angular 3",
        "email": "cont3@empresa.com.br"
      },

      {
        "_id": 4,
        "nome": "Contato Angular 4",
        "email": "cont4@empresa.com.br"
      },

    ];




    $scope.total = $scope.contatos.length;
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