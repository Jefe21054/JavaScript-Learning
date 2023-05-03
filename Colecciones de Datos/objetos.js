/**
 * OBJETOS
 * SINTAXIS
 */

let alumno = {
    nombre: 'Ivan',
    edad: 24,
    suscriptor: true,
    ciudad: 'Quito'
}

let valores = Object.values(alumno)
let claves = Object.keys(alumno)

console.log(alumno.ciudad)
console.log(alumno['edad'])
console.log(valores)
console.log(claves)