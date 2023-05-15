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

test('Verificar que la palabra todo no este dentro de mi variable holaMundo', () => {
  expect(holaMundo).not.toMatch(/todo/)
})