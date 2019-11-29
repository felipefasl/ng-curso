angular
    .module('app', [])
    .controller('ControladorController', controladorController);

function controladorController($scope) {

    $scope.nome = 'Felipe Lima ';
    $scope.quantidadeCliques = 0;
    /**
     * @description adiciona 1 à variável quantidadeCliques
     */
    $scope.contarCliques = function() {

        $scope.quantidadeCliques++;
    };
}