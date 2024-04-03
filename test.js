// Importamos las funciones y el objeto de tasas de conversión desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');


// Pruebas usando Jest
describe("Currency conversion functions", () => {
    test("Convertir de euros a dólares", () => {
        expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    });

    test("Convertir de dólares a yenes", () => {
        expect(fromDollarToYen(100)).toBeCloseTo(100 * oneEuroIs["JPY"] / oneEuroIs["USD"]);
    });

    test("Convertir de yenes a libras esterlinas", () => {
        expect(fromYenToPound(100)).toBeCloseTo(100 * oneEuroIs["GBP"] / oneEuroIs["JPY"]);
    });
});
