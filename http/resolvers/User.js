const Factory = require('../lib/Factory')

const users = Factory.createMany('User', 25)

module.exports = {
  Query: {
    allUsers: () => users
  }
}
