describe('NovoController', function() {

    var controllerTest;
    var $scope;
    var $location;
    var frutaService;

    beforeEach(function() {

        module('app', 'frutaServiceApp', 'ngRoute');
        inject(function(_$controller_, _$rootScope_, _$location_, _FrutaService_) {

            $scope = _$rootScope_.$new();
            $location = _$location_;
            frutaService = _FrutaService_;
            controllerTest = _$controller_('NovoController', { $scope: $scope, $location: $location, frutaService: frutaService });

        });
    });

    it('NovoController', function() {

        expect($scope.titulo).toBe('Nova Fruta');
        expect($scope.fruta).toBeDefined();
    });

    it('salvar', function() {

        $scope.fruta = { id: 1, descricao: 'teste' };
        $scope.salvar();
    });
});