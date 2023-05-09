/**
 * ASIGNACION DE ATRIBUTOS
 */

const alumno = {
  nombres: 'Ivan Alejandro',
  apellidos: 'Iglesias Giler',
  edad: 24,
  padre: {
    nombre: 'Ivan Ernesto Iglesias Puebla',
    edad: 52,
  },
  hermanos: ['Mateo', 'Sebastian'],
}

console.log(alumno)
alumno.genero = 'Masculino'
console.log(alumno)