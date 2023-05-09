/**
 * ATRIBUTOS Y METODOS
 * this -> palabra reservada para los metodos de un
 * objeto que se refieren a los atributos del propio
 * objeto al que nos referimos.
 */

const alumno = {
  // Atributos del objeto
  nombres: 'Ivan Alejandro',
  apellidos: 'Iglesias Giler',
  edad: 24,
  padre: {
    nombre: 'Ivan Ernesto Iglesias Puebla',
    edad: 52,
  },
  // Metodos del objeto
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
  },
  whoIsYourFather() {
    console.log(`Mi padre es ${this.padre.nombre}`)
  },
}
    
alumno.presentarse()
alumno.whoIsYourFather()