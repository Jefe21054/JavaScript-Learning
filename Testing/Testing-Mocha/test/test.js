const assertNode = require('assert') // node
const chai = require('chai') // chai
const assertChai = require('chai').assert // chai
const shouldChai = require('chai').should() // chai
const expectChai = require('chai').expect // chai
const chaiAsPromised = require('chai-as-promised') // chai

chai.use(chaiAsPromised)

describe('Mis ejemplos con mocha y node', () => {
  it('Validando que la longitud de un array es 5', () => {
    assertNode.equal([1,2,3,4,5].length, 5)
  })
})

describe('Mis ejemplos con mocha y chai', () => {
  it('Validando que la longitud de un array es 5', () => {
    assertChai.equal([1,2,3,4,5].length, 5)
  })

  it('Validando que 2 + 2 = 4', () => {
    const suma = 2 + 2
    assertChai.equal(suma, 4)
  })

  it('Validando la cantidad de elementos con should', () => {
    const arreglo = [10,20,30,40]
    arreglo.should.have.lengthOf(4)
  })

  it('Validando que holaMundo es un string con should', () => {
    const holaMundo = 'Hola mundo'
    holaMundo.should.be.a('string')
  })

  it('Validando la existencia de la propiedad de un objeto', () => {
    const jwt = {
      expireIn: new Date(),
      user: 'Ivan',
      server: 'IBM',
    }
    expectChai(jwt).to.have.property('user')
  })

  it('Verificando promesas', () => {
    return Promise.resolve(2 + 2).should.eventually.equal(4)
  })
})