// Guia de estilo John papa https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md
(function (angular) {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'frutaServiceApp'
        ])
        .config(['$routeProvider', '$locationProvider', definirRotas]);

    function definirRotas($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider.

            when('/', {
                templateUrl: 'lista.tpl.html',
                controller: 'ListaController',
                controllerAs: 'vm'
            }).

            when('/edicao/:id', {
                templateUrl: 'formulario.tpl.html',
                controller: 'EdicaoController',
                controllerAs: 'vm'
            }).

            when('/novo', {
                templateUrl: 'formulario.tpl.html',
                controller: 'NovoController',
                controllerAs: 'vm'
            }).

            otherwise({ redirectTo: '/' });

    }
})(angular);

