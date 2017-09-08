const Factory = require('../lib/Factory')
const uuid = require('uuid/v4')

const users = Factory.createMany('User', 25)

module.exports = {
  RootQuery: {
    allUsers: () => users,
    user: (_, data) => {
      return users.find(user => user.id === data.id)
    }
  },
  RootMutation: {
    createUser: (_, data) => {
      const newUser = Object.assign({ id: uuid() }, data)
      users.push(newUser)
      return newUser
    }
  }
}
