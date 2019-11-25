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
            });
    };

    $scope.excluir = function(id) {

        $scope.mensagem = 'carregando...';
        frutaService.deletar(id)
            .then(function() {

                $scope.mensagem = '';
                $rootScope.frutas = $rootScope.frutas.filter(function(fruta) { return fruta.id !== id });
                $window.alert('Operação realizada com sucesso!');
            }, function(erro) {

                console.log(erro.data.message);
            });

    };
}