angular
    .module('diretivasNativasApp', [])
    .controller('DiretivasNativasController', diretivasNativasController);

function diretivasNativasController($scope) {

    $scope.valoresDiv = {
        ehVermelho: false,
        descricaoInterna: 'Nenhuma cor aplicada',
        label: 'Liga'
    };

    /**
     * @description altera a variável ehVermelho para verdadeiro
     */
    $scope.aplicarVermelho = function() {

        $scope.valoresDiv = {
            ehVermelho: true,
            descricaoInterna: 'Vermelho Aplicado'
        };

    };
    $scope.ligaDesliga = function() {
        $scope.valoresDiv.ehVermelho = !$scope.valoresDiv.ehVermelho
        $scope.valoresDiv.descricaoInterna = $scope.valoresDiv.ehVermelho ? 'Vermelho Aplicado' : 'Nenhuma cor aplicada';
        $scope.valoresDiv.label = $scope.valoresDiv.ehVermelho ? 'Desliga' : 'Liga'
    };

    /**
     * @description altera a variável ehVermelho para false
     */
    $scope.retirarVermelho = retirarVermelho;

    function retirarVermelho() {

        $scope.valoresDiv.ehVermelho = false;
        $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada';
    };
}