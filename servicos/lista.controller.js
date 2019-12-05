angular
    .module('app')
    .controller('ListaController', listaController);

listaController.$inject = ['$scope', '$rootScope', '$window', 'FrutaService'];

function listaController($scope, $rootScope, $window, frutaService) {

    $scope.mensagem = 'carregando...';

    $scope.inicializar = function() {

        $rootScope.frutas = [];
        frutaService.listar()
            .then(function(response) {
                $scope.mensagem = '';
                $rootScope.frutas = response.data;
            })
            .catch(function(erro) {
                console.log(erro);
            });
    };

    $scope.excluir = function(id) {

        $scope.mensagem = 'carregando...';
        frutaService.deletar(id)
            .then(function() {

                frutaService.listar()
                    .then(function(response) {

                        $scope.mensagem = '';
                        $rootScope.frutas = response.data;
                        $window.alert('Operação realizada com sucesso!');
                    });
            })
            .catch(function(erro) {

                console.log(erro.data.message);
            });
    };
}