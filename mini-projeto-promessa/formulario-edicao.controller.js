angular
    .module('app')
    .controller('EdicaoController', edicaoController);

function edicaoController($q, $scope, $location, $routeParams) {

    // Variáveis Públicas
    $scope.titulo = 'Editar Fruta';
    $scope.fruta = $routeParams.fruta;

    // variáveis privadas
    var _indiceFruta = $scope.frutas.indexOf($scope.fruta);

    /**
     * @description Salva os dados editados da fruta
     */
    $scope.salvar = function() {

        $scope.mensagem = 'carregando...';
        editarFrutaDaLista()
            .then(function() {

                $scope.mensagem = '';
                $location.path('/');
            });

    };

    function editarFrutaDaLista() {

        return $q(function(resolve) {

            setTimeout(() => {

                $scope.frutas[_indiceFruta] = $scope.fruta;
                resolve();
            }, 1000);
        });
    }


}