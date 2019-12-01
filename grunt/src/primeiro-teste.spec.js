describe('Primeiros Testes', function() {

    xit('verificarAposentadoria', function() {

        expect(verificarAposentadoria(65, 20)).toEqual('QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(70, 20)).toEqual('QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(59, 20)).toEqual('NÃO QUALIFICADO PARA APOSENTARIA');

        expect(verificarAposentadoria(59, 30)).toEqual('QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(59, 35)).toEqual('QUALIFICADO PARA APOSENTARIA');

        expect(verificarAposentadoria(60, 25)).toEqual('QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(61, 26)).toEqual('QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(60, 24)).toEqual('NÃO QUALIFICADO PARA APOSENTARIA');
        expect(verificarAposentadoria(59, 25)).toEqual('NÃO QUALIFICADO PARA APOSENTARIA');

        expect(verificarAposentadoria(32, 14)).toEqual('NÃO QUALIFICADO PARA APOSENTARIA');
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
Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não.
Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
 */
function verificarAposentadoria(idade, tempoTrabalho) {

}


/**
Crie um programa para verificar se um triangulo é Equilátero, Isósceles ou Escaleno
· um triângulo isósceles é um triângulo que possui dois lados de mesma medida.
· um triângulo equilátero é todo triângulo em que os três lados são iguais.
· um triângulo escaleno nenhum dos lados são iguais.
 */
function verificarTipoTriangulo(lado1, lado2, lado3) {


}