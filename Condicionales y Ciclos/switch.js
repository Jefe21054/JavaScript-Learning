/**
 * CONDICIONALES MULTIPLES
 */

/**
 * QUE PERSONAJE DE DRAGONBALL Z ERES
 * 
 * Si eres fuerte y comelon eres goku
 * Si eres veloz y egoista eres Vegeta
 * Si eres pequenio y debil eres Krilin
 * Si eres travieso y jugueton eres Trunks
 * Si no eres ninguno, eres una sabandija
 */

/**
 * SINTAXIS SWITCH
 * switch (personalidad){
 *      case 'Fuerte y comelon':
 *          console.log('Eres Goku')
 *          break
 *      default:
 *          console.log('Eres una sabandija')
 * }
 */

let personalidad = 'Pequenio y debil'

switch (personalidad){
    case 'Fuerte y comelon':
        console.log('Eres Goku')
        break
    case 'Veloz y egoista':
        console.log('Eres Vegeta')
        break
    case 'Pequenio y debil':
        console.log('Eres Krilin')
        break
    case 'Travieso y jugueton':
        console.log('Eres Trunks')
        break
    default:
        console.log('Eres una sabandija')
}