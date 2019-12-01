angular.module('diretivaApp', [])
    .directive('primeiraDiretiva', primeriaDiretiva);

function primeriaDiretiva() {
    return {
        restrict: 'AECM',
        template: '<p>Fiz minha primeira diretiva!!</p>'
    };
}