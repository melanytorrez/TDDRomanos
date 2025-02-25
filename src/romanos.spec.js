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


