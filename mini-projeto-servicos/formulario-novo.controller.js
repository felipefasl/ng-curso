angular
    .module('rotasApp')
    .controller('NovoController', ['$scope', '$location', 'FrutaService', novoController]);

function novoController($scope, $location, frutaService) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = {
        id: undefined,
        nome: undefined
    };

    /**
     * @description Inclui uma nova fruta no array de frutas
     */
    $scope.salvar = function() {

        // Adiciona um novo item(fruta) no array(frutas)
        var nomeFruta = $scope.fruta.nome;
        console.log(`nome`, nomeFruta);
        frutaService.incluir(nomeFruta)
            .then(function() {

                // Redireciona para a página principal
                $location.path('/');
            });
    };
}