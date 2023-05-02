/**
 * FUNCIONES
 * PARAMETROS
 */

// Declaracion de mi funcion saludar con parametro
function saludar(nombre) {
    if (typeof nombre === 'string') {
        console.log(`Hola ${nombre}, muy buenos dias`)
    } else {
        console.log(`Escriba un nombre correcto`)
    }
}

// Llamado a la funcion saludar dandole un parametro
saludar('Ivan')