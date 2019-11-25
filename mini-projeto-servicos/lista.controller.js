angular
    .module('rotasApp')
    .controller('ListaController', ['$scope', '$rootScope', 'FrutaService', listaController]);

function listaController($scope, $rootScope, frutaService) {

    $scope.inicializar = function() {

        $rootScope.frutas = [];
        frutaService.listar()
            .then(function(response) {

                $rootScope.frutas = response.data;
            });
    };
}