angular
    .module('diretivasNativasApp', [])
    .controller('DiretivasNativasController', diretivasNativasController);

function diretivasNativasController($scope) {

    $scope.valoresDiv = {
        ehVermelho: false,
        descricaoInterna: 'Nenhuma cor aplicada'
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


    /**
     * @description altera a variável ehVermelho para false
     */
    $scope.retirarVermelho = retirarVermelho;

    function retirarVermelho() {

        $scope.valoresDiv.ehVermelho = false;
        $scope.valoresDiv.descricaoInterna = 'Nenhuma cor aplicada';
    };
}