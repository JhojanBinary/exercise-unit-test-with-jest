// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    // Retornamos el valor en yenes
    return valueInYen;
}

// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras esterlinas
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // Retornamos el valor en libras esterlinas
    return valueInPound;
}

// Objeto con tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87 // libra esterlina
}

// Exporta las funciones para usarlas en otros archivos 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };

