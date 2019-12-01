angular
    .module('app')
    .controller('EdicaoController', edicaoController);

edicaoController.$inject = ['$scope', '$rootScope', '$location', '$routeParams', 'FrutaService'];

function edicaoController($scope, $rootScope, $location, $routeParams, frutaService) {

    // Variáveis Públicas
    $scope.titulo = 'Editar Fruta';
    $scope.fruta = pesquisarFruta();

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.salvar = function() {

        // Atualiza os dados da fruta editada
        frutaService.atualizar($scope.fruta)
            .then(function() {

                // Redireciona para a página principal
                $location.path('/');
            });
    };

    function pesquisarFruta() {

        var idFrutaSelecionada = Number($routeParams.id);

        var frutaSelecionada;
        for (var index = 0; index < $rootScope.frutas.length; index++) {

            var fruta = $rootScope.frutas[index];
            if (fruta.id === idFrutaSelecionada) {

                frutaSelecionada = fruta;
            }
        }

        // var frutaSelecionada = $rootScope.frutas.find(function(fruta){ return fruta.id === idFrutaSelecionada});

        return frutaSelecionada;
    }
}