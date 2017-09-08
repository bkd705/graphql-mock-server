const BasicFactory = require('basic-factory').default
const faker = require('faker')
const uuid = require('uuid/v4')

const Factory = new BasicFactory()

Factory.register('User', () => ({
  id: uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
}))

module.exports = Factory
