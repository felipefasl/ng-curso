describe('NovoController', function() {

    var controllerTest;
    var $location;
    var frutaService;

    beforeEach(function() {

        module('app', 'frutaServiceApp', 'ngRoute');
        inject(function(_$controller_, _$rootScope_, _$location_, _FrutaService_) {

            $location = _$location_;
            frutaService = _FrutaService_;
            controllerTest = _$controller_('NovoController', { $location: $location, frutaService: frutaService });

        });
    });

    it('NovoController', function() {

        expect(controllerTest.titulo).toBe('Nova Fruta');
        expect(controllerTest.fruta).toBeDefined();
    });

    it('salvar', function() {

        controllerTest.fruta = { id: 1, descricao: 'teste' };
        controllerTest.salvar();
    });
});