const Factory = require('../lib/Factory')
const uuid = require('uuid/v4')

const users = Factory.createMany('User', 25)

module.exports = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (_, data) => {
      const newUser = Object.assign({ id: uuid() }, data)
      users.push(newUser)
      return newUser
    }
  }
}
