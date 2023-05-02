/**
 * CONDICIONALES
 */

/**
 * Invitacion a una fiesta 
 * Si eres mayor de edad y menor de 65 puedes 
 * ingresar a la fiesta.
 * Sino por favor quedate en casa.
 */

/**
 * SINTAXIS IF-ELSE
 * Dentro de las llaves se escribe la accion que va
 * a suceder, siempre y cuando la condicion se cumpla
 * if (condicion) {
 *      accion
 * } else {
 *      accion sino cumplo la condicion
 * }
 */

let persona = 'Ivan Alejandro'
let edad = 25

if (edad >= 18 && edad < 65) {
    console.log(`${persona} puedes venir a la fiesta`)
} else{
    console.log(`Por favor quedate en casa ${persona}`)
}
