test('Verificar que 2 + 2 = 4', () => {
  expect(2 + 2).toBe(4)
})

test('Verificar que 2 + 2 = 4, pero usando toEqual', () => {
  expect(2 + 2).toEqual(4)
})

test('Verificar que 5 es mayor a 4', () => {
  expect(5).toBeGreaterThan(4)
})

let holaMundo = 'Hola mundo'

test('Verificar que la palabra Hola este dentro de mi variable holaMundo', () => {
  expect(holaMundo).toMatch(/Hola/)
})

test('Verificar que la palabra todos no este dentro de mi variable holaMundo', () => {
  expect(holaMundo).not.toMatch(/todos/)
})

test('Verificar que 1 === 1', () => {
  expect(1 === 1).toBeTruthy()
})

let nombres = ['Ivan','Adrian','Karen','Kevin','Ivan']

let setNombres = new Set(nombres)

test('Verificar que el nombre Ivan se encuentre en el array', () => {
  expect(setNombres).toContain('Ivan')
})

test('Verificar la igualdad de un objeto', () => {
  let obj = {
    one: 1,
    two: 2,
    three: 3,
  }
  let objCompare = {
    one: 1,
    two: 2,
    three: 3
  }
  expect(obj).toEqual(objCompare)
})

const palindrome = word => word.split('').reverse().join('')

test('Verificar que reconocer es un palindromo', () => {
  expect(palindrome('reconocer')).toBe('reconocer')
})

const palindromo = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia')
    const palabraInvertida = word.split('').reverse().join('')
    resolve(palabraInvertida)
  })
}

// Menos Legible
test('Verificar que reconocer es un palindromo con promesas', () => {
  return palindromo('reconocer')
    .then(str => {
      expect(str).toBe('reconocer')
    })
})

// Mas legible
test('Verificar que reconocer es un palindromo con promesas y async', async () => {
  const response = await palindromo('reconocer')
  expect(response).toBe('reconocer')
})