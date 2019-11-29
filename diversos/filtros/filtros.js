angular.module('filtrosApp', [])
    .filter('cpf', formatarCPF)
    .filter('adicionaMeuNome', adicionarMeuNome)
    .filter('multiplicaPor4', multiplicarPor4);

function formatarCPF() {

    return function(input) {
        var str = input + '';
        if (str.length <= 11) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        console.log('chamou formatarCPF!!');
        return str;
    };
}

function adicionarMeuNome() {

    return function(input) {

        return input + ' Felipe Lima';
    }
}

function multiplicarPor4() {

    return function(numero) {

        return numero * 4;
    }
}