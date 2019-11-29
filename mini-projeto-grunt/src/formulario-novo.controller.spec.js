describe('NovoController', function() {

    var controllerTest;

    beforeEach(function() {

        angular.mock.module('app', 'frutaServiceApp');
        angular.mock.inject(function(_$controller_, _$rootScope_, _$location_, _FrutaService_) {

            controllerTest = _$controller_('NovoController', { $scope: _$rootScope_.$new(), $location: _$location_, });

        });
    });
    it('NovoController', function() {
        expect(controllerTest).toBeDefined();
    });
});