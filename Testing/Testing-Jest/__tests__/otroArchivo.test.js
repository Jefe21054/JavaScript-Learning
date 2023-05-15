describe('Este es un demo', () => {
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
})