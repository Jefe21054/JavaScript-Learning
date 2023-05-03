/**
 * STRINGS
 */

let texto = 'Ivan Alejandro Iglesias Giler'

/**
 * SLICE
 * Una porcion de texto
 * Elimina el texto desde la posicion 0, hasta 
 * antes de la posicion 3, manteniedo el texto 
 * restante y el segundo parametro elimina desde
 * la posicion indicada hasta el final
 * SINTAXIS
 */

let dato = texto.slice(3,10)
console.log(dato)

/**
 * SPLIT
 * Va a dividir el texto, sin embargo mantiene 
 * el texto original pero dividido. Va a realizar
 * cortes en el caracter que yo le indique. Devuelve
 * un arreglo con las divisiones realizadas. El 
 * caracter pasado como dato no lo incluye en la
 * separacion ni forma parte del array.
 * SINTAXIS
 */

let dato1 = texto.split(' ')
console.log(dato1)

let dato2 = texto.split('')
console.log(dato2)

/**
 * SEARCH
 * Requiere de una expresion regular como parametro.
 * Una experesion regular es una serie de caracteres
 * que simbolizan algo de tal manera que el lenguaje
 * comprende aquello y realiza una busqueda o 
 * comparacion. 
 * SINTAXIS
 */

let dato3 = texto.search()

/**
 * TO...
 * Cambia un texto a mayusculas, minusculas y
 * otras opciones.
 * SINTAXIS
 */

let texto1 = 'Ivan'
let texto2 = 'ivan'
let texto3 = 'IVAN'

let dato4 = texto.toLocaleLowerCase()
let dato5 = texto.toLocaleUpperCase()