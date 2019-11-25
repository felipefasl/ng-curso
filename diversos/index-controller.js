angular
    .module('indexApp', [])
    .controller('IndexController', indexController);

function indexController($scope) {

    $scope.nome = 'Felipe Augusto';
    $scope.quantideCliques = 0;
    $scope.frutas = ['banana', 'maçã', 'laranja'];

    /**
     * @description Adiciona 1 à variável quantidadeCliques
     */
    $scope.contarCliques = function() {

        $scope.quantideCliques = $scope.quantideCliques + 1;
    };
}