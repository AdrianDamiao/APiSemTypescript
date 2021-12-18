const soma = require('../../src/utils/soma');

describe('Exemplo de teste unitário com o modulo soma', () => {
    it('deve somar 2 + 2 igual a 4', () => {
        expect(soma(2, 2)).toBe(4);
    });
    it('deve somar 3 + 3 igual a 6', () => {
        expect(soma(3, 3)).toBe(6);
    });
    it('deve somar (-1) + 3 igual a 2', () => {
        expect(soma(-1, 3)).toBe(2);
    });
})