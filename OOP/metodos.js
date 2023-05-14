/**
 * METODOS
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
  
// Instanciar objetos  
const ivan = new Usuario('Ivan Alejandro','Iglesias Giler','ivan@ed.team',true)
const alexys = new Usuario('Alexys','Lozada','alexys@ed.team',true)
const beto = new Usuario('Beto','Quiroga','beto@ed.team',true)

ivan.setApellidos('Iglesias')

console.log(`${ivan.getNombres()} ${ivan.getApellidos()}`)