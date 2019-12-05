angular
    .module('app')
    .controller('ListaController', listaController);

function listaController($scope) {

    $scope.excluir = function(p1) {
        if (confirm('Confirma a deleção da fruta ' + $scope.frutas[p1])) {
            $scope.frutas.splice(p1, 1);
        }
    }
}