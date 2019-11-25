angular
    .module('app', [])
    .controller('ExemploController', exemploController);

function exemploController($scope, $window) {

    $scope.nomeFormulario = '';

    /**
     * @description Simula salvamento dos dados do formulário
     */
    $scope.salvar = function() {

        $scope.nomeFormulario = '';
        $window.alert('Operação realizada com sucesso!')
    };
}