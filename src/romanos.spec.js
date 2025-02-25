// archivo: romanos.test.js
//const convertirARomanos = require('./romanos');
import convertirARomanos from"./romanos.js"

test('Convierte 1 a I', () => {
    expect(convertirARomanos(1)).toBe('I');
});

test('Convierte 5 a V', () => {
    expect(convertirARomanos(5)).toBe('V');
});

test('Convierte 10 a X', () => {
    expect(convertirARomanos(10)).toBe('X');
});

test('Convierte 50 a L', () => {
    expect(convertirARomanos(50)).toBe('L');
});

test('Convierte 100 a C', () => {
    expect(convertirARomanos(100)).toBe('C');
});

test('Convierte 500 a D', () => {
    expect(convertirARomanos(500)).toBe('D');
});
