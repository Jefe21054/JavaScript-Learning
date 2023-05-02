/**
 * FUNCIONES
 * DE PRIMERA CLASE
 */

function obtenerNombreCompleto(nombre, apellidos) {
    return `${nombre} ${apellidos}`
}

// Guardando ejecucion en una variable
let nombreCompleto = obtenerNombreCompleto('Ivan', 'Iglesias Giler')

//Guardando funcion completa en una nueva

let nameComplete = obtenerNombreCompleto

// Imprimiendo funcion y variable
console.log(nombreCompleto)
console.log(nameComplete)