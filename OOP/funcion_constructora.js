/**
 * FUNCION CONSTRUCTORA
 */

function Usuario(nombres,apellidos,correo,activo) {
  this.nombres = nombres,
  this.apellidos = apellidos,
  this.correo = correo,
  this.activo = activo
}

const ivan = new Usuario('Ivan Alejandro','Iglesias Giler','ivan@ed.team',true)
const alexys = new Usuario('Alexys','Lozada','alexys@ed.team',true)
const beto = new Usuario('Beto','Quiroga','beto@ed.team',true)

console.log(ivan)
console.log(alexys)
console.log(beto)