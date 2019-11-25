angular
    .module('rotasApp', [
        'ngRoute',
        'frutaServiceApp'
    ])
    .config(['$routeProvider', '$locationProvider', definirRotas]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'ListaController',
        templateUrl: 'lista.tpl.html'
    }).

    when('/edicao/:id', {
        controller: 'EdicaoController',
        templateUrl: 'formulario.tpl.html'
    }).

    when('/novo', {
        controller: 'NovoController',
        templateUrl: 'formulario.tpl.html'
    }).

    otherwise({ redirectTo: '/' });

}