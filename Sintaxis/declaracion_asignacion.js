/**
 * VARIABLES
 */

//Declaracion

var alumnos
let alumno

// Asignacion

alumno = 'Ivan Iglesias'

// Declaracion y Asignacion

let profesor = 'Beto Quiroga'

// Reasignacion

profesor = 'Alvaro Felipe'

console.log(profesor)

/**
 * ASIGNACION POR REFERENCIA
 */

let profesor1 = 'Alexys'
let alumno1 = profesor1

profesor1 = 'Alvaro'
alumno1 = 'Ivan'

console.log(profesor1)
console.log(alumno1)