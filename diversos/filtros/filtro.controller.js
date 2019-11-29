angular
    .module('app', ['filtrosApp'])
    .controller('FiltroController', filtroController);

function filtroController($scope, $filter) {

    $scope.cpfDigitado = $filter('cpf')('02470868513');
}