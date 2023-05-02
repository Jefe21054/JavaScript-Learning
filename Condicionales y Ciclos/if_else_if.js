/**
 * CONDICIONALES
 */

/**
 * Invitacion a una fiesta 
 * Si eres mayor de edad y menor de 65 puedes 
 * ingresar a la fiesta.
 * Sino, si tienes permiso firmado de tus padres,
 * puedes asistir.
 * Sino por favor quedate en casa.
 */

/**
 * SINTAXIS IF-ELSE
 * Dentro de las llaves se escribe la accion que va
 * a suceder, siempre y cuando la condicion se cumpla
 * if (condicion) {
 *      accion
 * } else if (condicion) {
 *      accion
 * } else{
 *      accion sino cumplo las condiciones
 * }
 */

let persona = 'Ivan Alejandro'
let edad = 25
let permiso = true

if (edad >= 18 && edad < 65) {
    console.log(`${persona} puedes venir a la fiesta`)
} else if (permiso === true && edad <= 18) {
    console.log(`${persona} puedes venir, tienes permiso`)
} else{
    console.log(`Por favor quedate en casa ${persona}`)
}
