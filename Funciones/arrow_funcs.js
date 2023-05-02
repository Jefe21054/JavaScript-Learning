/**
 * FUNCIONES FLECHA - ARROW FUNCTIONS
 *                  =>
 */

//const sumar = function(a,b) {
//    return a+b
//}

/**
 * SINTAXIS
 */
const sumar = (a,b) => a+b

//const restar = function(c,d) {
//    return c-d
//}

const restar = (c,d) => c-d

console.log(sumar(10,5))
console.log(restar(5,1))

const saludar = nombre => {
    if(typeof nombre === 'string'){
        return `Hola ${nombre}`
    } else {
        console.error('Tipo de dato equivocado')
    }
}

console.log(saludar('Ivan'))