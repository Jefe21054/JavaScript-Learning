/**
 * REDUNDANCIA
 */

const usuario1 = {
  nombres: 'Ivan Iglesias',
  apellidos: 'Iglesias Giler',
  edad: 24,
  correo: 'ivan@mail.me',
  activo: true,
  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`
    )
  },
}
  
const usuario2 = {
  nombres: 'Alexys',
  apellidos: 'Lozada',
  edad: 40,
  correo: 'alexys@ed.team',
  activo: true,
  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`
    )
  },
}
  
console.log(usuario1)
console.log(usuario2)