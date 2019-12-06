// Guia de estilo John papa https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md
(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('EdicaoController', edicaoController);

    edicaoController.$inject = ['$location', '$routeParams', 'FrutaService'];

    function edicaoController($location, $routeParams, frutaService) {

        // vm ( View Model ) recebe o $scope através do "this"
        var vm = this;

        // Variáveis Públicas
        vm.titulo = 'Editar Fruta';
        vm.fruta = pesquisarFruta();

        /**
         * @description Salva os dados editados da fruta
         */
        vm.salvar = function () {

            // Atualiza os dados da fruta editada
            frutaService.atualizar(vm.fruta)
                .then(function () {

                    // Redireciona para a página principal
                    $location.path('/');
                });
        };

        function pesquisarFruta() {

            var idFrutaSelecionada = Number($routeParams.id);

            var frutaSelecionada;
            for (var index = 0; index < vm.frutas.length; index++) {

                var fruta = vm.frutas[index];
                if (fruta.id === idFrutaSelecionada) {

                    frutaSelecionada = fruta;
                }
            }

            return frutaSelecionada;
        }
    }
})(angular);