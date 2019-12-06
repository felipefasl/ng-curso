// Guia de estilo John papa https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md
(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('ListaController', listaController);

    listaController.$inject = ['$window', 'FrutaService'];

    function listaController($window, frutaService) {

        // vm ( View Model ) recebe o $scope através do "this"
        var vm = this;

        vm.mensagem = 'carregando...';
        vm.frutas = [];
        frutaService.listar()
            .then(function (response) {
                vm.mensagem = '';
                vm.frutas = response.data;
            });



        vm.excluir = function (id) {

            vm.mensagem = 'carregando...';
            frutaService.deletar(id)
                .then(function () {

                    vm.mensagem = '';
                    vm.frutas = vm.frutas.filter(function (fruta) { return fruta.id !== id; });
                    $window.alert('Operação realizada com sucesso!');
                }, function (erro) {

                    console.log(erro.data.message);
                });

        };
    }

})(angular);