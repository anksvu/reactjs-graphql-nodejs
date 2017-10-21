const graphqlTools = require('graphql-tools')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

const schema = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
