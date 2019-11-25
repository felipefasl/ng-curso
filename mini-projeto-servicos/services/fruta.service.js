angular.module('frutaServiceApp', [])
    .service('FrutaService', frutaService);

function frutaService($http) {

    var ENDERECO_BACKEND = 'https://ng-curso-api.herokuapp.com/frutas';

    return {
        listar: function() {
            return $http.get(ENDERECO_BACKEND);
        },
        incluir: function(nome) {
            console.log(`nome`, nome);
            return $http.post(ENDERECO_BACKEND, nome);
        },
        atualizar: function(fruta) {
            return $http.put(ENDERECO_BACKEND, fruta);
        },
        deletar: function(id) {
            return $http.delete(ENDERECO_BACKEND, id);
        }
    }
}