const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
  type User {
    id: ID!,
    username: String!,
    email: String!,
    firstName: String!,
    lastName: String!
  }
`

module.exports = makeExecutableSchema({ typeDefs })
