angular
    .module('rotasApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', definirRotas])
    .run(['$rootScope', inicializarVariaveisGlobais]);

function definirRotas($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.

    when('/', {
        controller: 'ListaController',
        templateUrl: 'lista.tpl.html'
    }).

    when('/edicao/:fruta', {
        controller: 'EdicaoController',
        templateUrl: 'formulario.tpl.html'
    }).

    when('/novo', {
        controller: 'NovoController',
        templateUrl: 'formulario.tpl.html'
    }).

    otherwise({ redirectTo: '/' });

}

/**
 * @description Inicializa variáveis globais no rootScope
 * @param {*} $rootScope Injeção angular
 */
function inicializarVariaveisGlobais($rootScope) {

    $rootScope.frutas = ['banana', 'maçã', 'laranja'];
    console.log('rotasApp.run');
}