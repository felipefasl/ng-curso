describe('FrutaService', function() {

    var serviceTest;
    var $httpBackend;

    beforeEach(function() {

        module('frutaServiceApp');
        inject(function(_FrutaService_, _$httpBackend_) {

            serviceTest = _FrutaService_;
            $httpBackend = _$httpBackend_;
        });
    });

    it('listar', function() {

        $httpBackend.expectGET('https://ng-curso-api.herokuapp.com/frutas').respond(200, [{ id: 1, nome: 'banana' }]);
        serviceTest.listar()
            .then(function(response) {
                var listaFrutas = response.data;
                expect(listaFrutas.length).toEqual(1);
                expect(listaFrutas[0].id).toEqual(1);
                expect(listaFrutas[0].nome).toEqual('banana');
            });
        $httpBackend.flush();
    });
});