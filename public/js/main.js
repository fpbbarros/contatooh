'use strict';

angular.module('contatooh', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {


    $routeProvider.when('/contatos', {
      templateUrl: './partials/contatos.html',
      controller: 'ContatosController'
    });


    $routeProvider.when('/contato/:contatoId', {
      templateUrl: './partials/contato.html',
      controller: 'ContatoController'
    });


    $routeProvider.when('/error', {
      templateUrl: './partials/error.html',

    });

    $routeProvider.otherwise({ redirectTo: '/error' });
  });
