/**
 * HERENCIA
 */

class Usuario {
  constructor(nombres,apellidos,correo,activo) {
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo
  }
  
  // Esto es un metodo propio
  presentarse() {
    return `Hola, soy ${this.nombres} y mi correo es: ${this.correo}`
  }

  /**
  * Metodos getters y setters
  * GET -> Obtener
  * SET -> Dar
  */
  getNombres() {
    return this.nombres
  }
  
  getApellidos() {
    return this.apellidos
  }

  setApellidos(nuevosApellidos) {
    this.apellidos = nuevosApellidos
  }
}

// HERENCIA
class Profesor extends Usuario {
  constructor(nombres,apellidos,correo,activo,cursosDictados,calificacion) {
    super(nombres,apellidos,correo,activo)
    this.cursosDictados = cursosDictados
    this.calificacion = calificacion
  }
}

class Alumno extends Usuario {
  constructor(nombres,apellidos,correo,activo,cursosTomados) {
    super(nombres,apellidos,correo,activo)
    this.cursosTomados = cursosTomados
  }
}

// Instanciar objetos  
const ivan = new Alumno('Ivan Alejandro','Iglesias Giler','ivan@ed.team',true,['Python','JavaScript','C#'])
const beto = new Profesor('Beto','Quiroga','beto@ed.team',true,['JavaScript','React'],10)

console.log(ivan.presentarse())
console.log(beto.presentarse())