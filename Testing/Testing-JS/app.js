/**
 * ARCHIVO PRINCIPAL
 */

const assert = require('assert')

const isVowel = require('./isVowel.test')

console.assert(isVowel('b'), 'No es una vocal')
console.assert(isVowel('a'), 'No es una vocal')

try {
  //assert.ok(isVowel('e'))
  assert.equal(isVowel('e'),false)
} catch (error) {
  console.error(error.message)
}