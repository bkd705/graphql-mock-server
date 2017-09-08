const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers/User')

const typeDefs = `
  type User {
    id: ID!,
    username: String!,
    email: String!,
    firstName: String!,
    lastName: String!
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(
      username: String!,
      email: String!,
      firstName: String!,
      lastName: String!
    ): User
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
