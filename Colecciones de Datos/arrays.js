/**
 * ARRAYS
 */

let amigos = [`Pedro`,  `Gabriel`, `Erick`, `Daniel`]
console.log(amigos)

// Agregar elementos a un array
let dato = amigos.push(`Beto`)
console.log(dato)
console.log(amigos)

// Quitar elementos a un array
let dato1 = amigos.pop()
console.log(dato1)
console.log(amigos)

// Partir un array en dos
// Devuelve un nuevo arreglo con el resultado deseado
let dato2 = amigos.slice(0,2) //DESDE 0, HASTA ANTES de 2
console.log(dato2)
console.log(amigos)