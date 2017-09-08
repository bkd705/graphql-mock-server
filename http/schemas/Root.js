const { makeExecutableSchema } = require('graphql-tools')
const User = require('./User')
const UserResolver = require('../resolvers/User')

const RootQuery = `
  type RootQuery {
    user(id: ID!): User!
    allUsers: [User!]!
  }
`

const RootMutation = `
  type RootMutation {
    createUser(
      username: String!,
      email: String!,
      firstName: String!,
      lastName: String!
    ): User
  }
`

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`

const resolvers = Object.assign({}, UserResolver)

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, User],
  resolvers
})
