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
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
