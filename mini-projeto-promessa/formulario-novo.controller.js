angular
    .module('app')
    .controller('NovoController', novoController);

function novoController($scope, $location, $routeParams, $q) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = '';

    /**
     * @description Inclui uma nova fruta no array de frutas
     */
    $scope.salvar = function() {

        $scope.mensagem = 'carregando...';
        adicionarFrutaNaLista()
            .then(function() {

                $scope.mensagem = '';
                $location.path('/');
            });

    };

    function adicionarFrutaNaLista() {
        var deferred = $q.defer();

        setTimeout(() => {

            $scope.frutas.push($scope.fruta);
            deferred.resolve();
        }, 1000);

        return deferred.promise;
    }
}