const toCelsius = (f) => {

    if (!Number.isFinite(f)) {
        throw new TypeError('La temperatura debe ser un numero finito');
    }
    //Jefferson Yepez

    const celcius = (f - 32) * (5 / 9);
    return Number(celcius.toFixed(1));
};

//Jefferson Yepez
const toFahrenheit = (c) => {
    if (!Number.isFinite(c)) {
        throw new TypeError("La temperatura debe ser un numero finito");
    }

    const fahrenheit = (c * (9 / 5)) + 32;
    return Number(fahrenheit.toFixed(1));
};

function movingAverage(series, window) {
    if (!Array.isArray(series)) {
        throw new TypeError('La serie debe ser un arreglo');
    }

    if (!Number.isInteger(window)) {
        throw new TypeError("La ventana debe ser un numero entero");
    }

    if (window < 2 || window > series.length) {
        throw new RangeError('la ventana esta fuera de rango');
    }

    if (!series.every(Number.isFinite)) {
        throw new TypeError('series contiene valores no numéricos');
    }

    //Jefferson Yepez

    const result = [];

    for (let i = 0; i <= series.length - window; i++) {
        const slice = series.slice(i, i + window);
        const avg = slice.reduce((sum, val) => sum + val, 0) / window;
        result.push(Number(avg.toFixed(2)));
    }

    return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };

