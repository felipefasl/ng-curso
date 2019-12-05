angular
    .module('app')
    .controller('NovoController', novoController);

function novoController($scope, $location) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = '';

    /**
     * @description Inclui uma nova fruta no array de frutas
     */
    $scope.salvar = function() {

        // Adiciona um novo item(fruta) no array(frutas)
        $scope.frutas.push($scope.fruta);

        // Redireciona para a página principal
        $location.path('/');
    };
}