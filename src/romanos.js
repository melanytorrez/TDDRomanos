// archivo: romanos.js
function convertirARomanos(num) {
    const valores = [
        { valor: 10, simbolo: 'X' },
        { valor: 5, simbolo: 'V' },
        { valor: 1, simbolo: 'I' }
    ];

    let resultado = '';
    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i].valor) {
            resultado += valores[i].simbolo;
            num -= valores[i].valor;
        }
    }

    return resultado;
}

//module.exports = convertirARomanos;
export default convertirARomanos;