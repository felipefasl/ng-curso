// Guia de estilo John papa https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md
(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('NovoController', novoController);

    novoController.$inject = ['$location', 'FrutaService'];

    function novoController($location, frutaService) {

        // vm ( View Model ) recebe o $scope através do "this"
        var vm = this;

        vm.titulo = 'Nova Fruta';
        vm.fruta = {
            id: undefined,
            nome: undefined
        };

        /**
         * @description Inclui uma nova fruta na base de dados
         */
        vm.salvar = function () {

            frutaService.incluir(vm.fruta.nome)
                .then(function () {

                    // Redireciona para a página principal
                    $location.path('/');
                });
        };
    }

})(angular);