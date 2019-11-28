angular
    .module('app', [])
    .controller('LoopController', loopController);

function loopController($scope, $window) {

    $scope.frutas = ['banana', 'abacaxi', 'maçã', 'cajá'];


}