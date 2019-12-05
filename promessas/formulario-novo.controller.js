angular
    .module('app')
    .controller('NovoController', novoController);

function novoController($scope, $location, $q) {

    $scope.titulo = 'Nova Fruta';
    $scope.fruta = '';

    /**
     * @description Inclui uma nova fruta no array de frutas
     */
    $scope.salvar = function() {

        $scope.mensagem = 'carregando...';
        adicionarFrutaNaLista()
            .then(function(response) {

                $scope.mensagem = '';
                $location.path(response);
            });

    };

    /**
     * @description adiciona um item à lista e retorna uma rota
     * @returns uma rota do tipo string
     */
    function adicionarFrutaNaLista() {
        var deferred = $q.defer();

        setTimeout(function() {

            $scope.frutas.push($scope.fruta);
            deferred.resolve('/');
        }, 1000);

        return deferred.promise;
    }
}