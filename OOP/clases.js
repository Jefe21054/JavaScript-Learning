/**
 * CLASES
 */

class Usuario {
  constructor(nombres,apellidos,correo,activo) {
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo
  }
}

// Instanciar un objeto
const ivan = new Usuario('Ivan Alejandro','Iglesias Giler','ivan@ed.team',true)
const alexys = new Usuario('Alexys','Lozada','alexys@ed.team',true)
const beto = new Usuario('Beto','Quiroga','beto@ed.team',true)

// Estas son instancias de la clase usuario
console.log(ivan)
console.log(alexys)
console.log(beto)