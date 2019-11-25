angular
    .module('rotasApp')
    .controller('NovoController', novoController);

function novoController($scope, $location, $routeParams) {

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