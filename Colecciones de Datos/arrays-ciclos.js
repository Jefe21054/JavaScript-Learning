/**
 * ARRAYS
 * CICLOS
 */

let amigos = [`Pedro`,  `Gabriel`, `Erick`, `Daniel`]

/**
 * FOR EACH
 * SINTAXIS
 * Necesita como parametro una funcion
 * Descontinuado
 */

amigos.forEach(function(amigo) {
    console.log(amigo)
})

amigos.forEach(amigo => console.log(amigo))

/**
 * EXPLICACIONES Y FUNCIONAMIENTO
 */

let dato = amigos.forEach(amigo => console.log(amigo))

console.log(dato)

let dato1 = amigos.forEach(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)

/**
 * MAP
 * SINTAXIS
 * Devuelve un nuevo array con el retorno establecido
 * Nueva forma de iterar arrays
 */

amigos.map(function(amigo) {
    console.log(amigo)
})

amigos.map(amigo => console.log(amigo))

/**
 * EXPLICACIONES Y FUNCIONAMIENTO
 */

let dato2 = amigos.map(amigo => console.log(amigo))

console.log(amigos)

let dato3 = amigos.map(amigo => `Hola ${amigo}`)

console.log(amigos)
console.log(dato)

/**
 * FILTER
 * SINTAXIS
 */

let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let dato4 = numeros.filter(num => num>20)

console.log(dato4)

/**
 * FIND
 * SINTAXIS
 * Entrega el primer dato del array que cumple
 * la condicion en cualquier tipo de dato
 */

let dato5 = numeros.find(num => num%2 === 1)

console.log(dato5)

/**
 * INCLUDES
 * SINTAXIS
 * Entrega como resultado un booleano que indica
 * si el dato se encuentra en el array o no
 */

let dato6 = numeros.includes(33)
let dato7 = numeros.includes(35)

console.log(dato6)
console.log(dato7)

/**
 * SOME 
 * SINTAXIS
 * Me indica mediante un booleano si al menos algun 
 * elemento del array cumple con alguna condicion
 */

let numeros1 = [10, 436, 45, 'Ivan', 33, 9, 2, 54]

let dato8 = numeros1.some(num => typeof num === 'string')

console.log(dato8)

/**
 * EVERY
 * SINTAXIS
 * Evalua si absolutamente todos los elementos del
 * array cumplen con alguna condicion y entrega una
 * respuesta booleana
 */

let dato9 = numeros.some(num => typeof num === 'number')

console.log(dato9)