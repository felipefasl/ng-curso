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
            descricaoInterna: 'Vermelho Aplicado',
            label: 'Desliga'
        };

    };

    /**
     * @description altera a variável ehVermelho para false
     */
    $scope.retirarVermelho = retirarVermelho;

    function retirarVermelho() {

        $scope.valoresDiv.ehVermelho = false;
        $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada';
        $scope.valoresDiv.label = 'Liga';
    };

    /**
     * @description Aplica ou retira vermelho da div e altera a label do botão
     */
    $scope.ligaDesliga = function() {

        $scope.valoresDiv.ehVermelho = !$scope.valoresDiv.ehVermelho
        if ($scope.valoresDiv.ehVermelho) {

            $scope.valoresDiv.descricaoInterna = 'Vermelho Aplicado';
            $scope.valoresDiv.label = 'Desliga';
        } else {

            $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada';
            $scope.valoresDiv.label = 'Liga';
        }
    };
}