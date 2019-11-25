angular
    .module('app')
    .controller('NovoController', novoController);

novoController.$inject = ['$scope', '$location', 'FrutaService'];

function novoController($scope, $location, frutaService) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = {
        id: undefined,
        nome: undefined
    };

    /**
     * @description Inclui uma nova fruta na base de dados
     */
    $scope.salvar = function() {

        frutaService.incluir($scope.fruta.nome)
            .then(function() {

                // Redireciona para a página principal
                $location.path('/');
            });
    };
}