angular
    .module('app')
    .controller('EdicaoController', edicaoController);

edicaoController.$inject = ['$scope', '$location', '$routeParams', 'FrutaService'];

function edicaoController($scope, $location, $routeParams, frutaService) {

    // Variáveis Públicas
    $scope.titulo = 'Editar Fruta';
    $scope.fruta = {
        id: $routeParams.id,
        nome: $routeParams.nome
    };

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.salvar = function() {

        // Atualiza os dados da fruta editada
        frutaService.atualizar($scope.fruta)
            .then(function() {

                // Redireciona para a página principal
                $location.path('/');
            })
            .catch(function(erro) {

                console.log(erro.data.message);
            });
    };
}