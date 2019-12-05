describe('Primeiros Testes', function() {

    xit('verificarAposentadoria', function() {

        expect(verificarAposentadoria(65, 20)).toEqual('QUALIFICADO');
        expect(verificarAposentadoria(70, 20)).toEqual('QUALIFICADO');
        expect(verificarAposentadoria(59, 20)).toEqual('NÃO QUALIFICADO');

        expect(verificarAposentadoria(59, 30)).toEqual('QUALIFICADO');
        expect(verificarAposentadoria(59, 35)).toEqual('QUALIFICADO');

        expect(verificarAposentadoria(60, 25)).toEqual('QUALIFICADO');
        expect(verificarAposentadoria(61, 26)).toEqual('QUALIFICADO');
        expect(verificarAposentadoria(60, 24)).toEqual('NÃO QUALIFICADO');
        expect(verificarAposentadoria(59, 25)).toEqual('NÃO QUALIFICADO');

        expect(verificarAposentadoria(32, 14)).toEqual('NÃO QUALIFICADO');
    });


    xit('verificarTipoTriangulo', function() {

        expect(verificarTipoTriangulo(1, 1, 1)).toEqual('EQUILÁTERO');
        expect(verificarTipoTriangulo(2, 1, 1)).toEqual('ISÓSCELES');
        expect(verificarTipoTriangulo(1, 2, 1)).toEqual('ISÓSCELES');
        expect(verificarTipoTriangulo(1, 1, 2)).toEqual('ISÓSCELES');
        expect(verificarTipoTriangulo(1, 2, 3)).toEqual('ESCALENO');
    });

});


/**
 * Escreva uma função para ler o salário mensal atual de um funcionário e o percentual de reajuste.
 * Calcular e escrever o valor do novo salário. 
 */
function calcularReajuste(salario, percentualReajuste) {

}


/**
 * Escreva uma função para receber um valor e retornar o seu antecessor. 
 */
function exibirAntecessor(valor) {

}

/**
 * Escreva uma função para receber um valor e retornar o seu antecessor. 
 */
function exibirAntecessor(valor) {

}

/**
 * Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
 * maiores.
 */
function calcularSomaDoisMaiores(valor1, valor2, valor3) {

}

/**
Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não.
Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
A função deve retornar as string 'QUALIFICADO' caso o funcionário esteja qualificado para aposentadoria
ou 'NÃO QUALIFICADO' em caso contrário
 */
function verificarAposentadoria(idade, tempoTrabalho) {

}


/**
Crie uma função para verificar se um triangulo é Equilátero, Isósceles ou Escaleno
· um triângulo isósceles é um triângulo que possui dois lados de mesma medida.
· um triângulo equilátero é todo triângulo em que os três lados são iguais.
· um triângulo escaleno nenhum dos lados são iguais.
A função deve retornar a string 'EQUILÁTERO' ou 'ISÓSCELES' ou 'ESCALENO'
 */
function verificarTipoTriangulo(lado1, lado2, lado3) {


}