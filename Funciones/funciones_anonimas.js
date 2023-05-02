/**
 * FUNCIONES ANONIMAS
 */

/**
 * SINTAXIS
 */

let sumar = function (a,b,c) {
    return a+b+c
}

let resultado = sumar(2,4,5)
console.log(resultado);

(function(d,e,f) {
    console.log(d+e+f)
}(10,4,5))