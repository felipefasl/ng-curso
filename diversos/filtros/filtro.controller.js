angular
    .module('app', ['filtrosApp'])
    .controller('FiltroController', filtroController);

function filtroController($scope) {

    $scope.cpfDigitado = '02470868513';
}