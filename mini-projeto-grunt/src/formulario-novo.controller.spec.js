describe('NovoController', function() {

    beforEach(function() {

        module('app', 'frutaServiceApp');
    });

    var controllerTest;


    it('NovoController', function() {

        inject(function(_$controller_, _FrutaService_) {
            controllerTest = _$controller_('NovoCont')
        });
    });


});