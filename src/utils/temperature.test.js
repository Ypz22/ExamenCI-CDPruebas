const { toCelsius, toFahrenheit, movingAverage } = require('./temperature');

describe('Pruebas de la función toCelsius', () => {
    test('32F tiene que ser igual a 0C', () => {
        expect(toCelsius(32)).toBe(0);
    });

    test('Si no es finito el numero devuelve un error', () => {
        expect(() => toCelsius(Infinity)).toThrow(TypeError);
    });
});

//Jefferson Yepez
describe('Pruebas de la función toFahrenheit', () => {
    test('0C tiene que ser igual a 32F', () => {
        expect(toFahrenheit(0)).toBe(32);
    });

    test('100C tiene que ser igual a 212F', () => {
        expect(toFahrenheit(100)).toBe(212);
    });

    test('-40C tiene que ser igual a -40F', () => {
        expect(toFahrenheit(-40)).toBe(-40);
    });

    test('Si no es finito el numero devuelve un error', () => {
        expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
    });
});

describe('Pruebas de la función movingAverage', () => {
    test('([10,20,30,40],2) tiene que ser igual a [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });
    //Jefferson Yepez
    test('([1,2,3],3) tiene que ser igual a [2.00]', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });

    test('Si la serie no es un arreglo devuelve un error', () => {
        expect(() => movingAverage(2, 2)).toThrow(TypeError);
    });

    test('Si la ventana no es un numero entero devuelve un error', () => {
        expect(() => movingAverage([1, 2, 3], 2.3)).toThrow(TypeError);
    });

    test('Si la ventana es menor que dos devuelve un error', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
    });
    //Jefferson Yepez
    test('Si la ventana tiene datos no numericos devuelve un error', () => {
        expect(() => movingAverage([1, 2, "abc"], 2)).toThrow(TypeError);
    });
});