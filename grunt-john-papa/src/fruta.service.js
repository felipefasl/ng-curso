// Guia de estilo John papa https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md
(function (angular) {
    'use strict';

    angular.module('frutaServiceApp', [])
        .service('FrutaService', frutaService);

    function frutaService($http) {

        var ENDERECO_BACKEND = 'https://ng-curso-api.herokuapp.com/frutas';

        return {
            listar: function () {
                return $http.get(ENDERECO_BACKEND);
            },
            incluir: function (nome) {

                return $http.post(ENDERECO_BACKEND, nome);
            },
            atualizar: function (fruta) {

                return $http.put(ENDERECO_BACKEND, fruta);
            },
            deletar: function (id) {

                var parametros = {
                    data: id,
                    headers: {
                        'Content-type': 'application/json;charset=utf-8'
                    }
                };

                return $http.delete(ENDERECO_BACKEND, parametros);
            }
        };
    }
})(angular);

