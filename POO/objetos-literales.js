/**
 * OBJETOS LITERALES
 * Un objeto es un tipo de dato propio de JS.
 * Ya se aprendio en el curso JS desde cero.
 * Un objeto se puede anidar dentro de otro
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
    
console.log(alumno.padre)
console.log(alumno['apellidos'])