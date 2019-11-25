angular
    .module('app')
    .controller('EdicaoController', edicaoController);

function edicaoController($scope, $location, $routeParams) {

    // Variáveis Públicas
    $scope.titulo = 'Editar Fruta';
    $scope.fruta = $routeParams.fruta;

    // variáveis privadas
    var _indiceFruta = $scope.frutas.indexOf($scope.fruta);

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.salvar = function() {

        // Atualiza os dados da fruta editada
        $scope.frutas[_indiceFruta] = $scope.fruta;

        console.log

        // Redireciona para a página principal
        $location.path('/');
    };
}