import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getOperationAST } from 'graphql'


const link = ApolloLink.split(
  operation => {
    const operationAST = getOperationAST(
      operation.query, operation.operationName)
    return !!operationAST &&
    operationAST.operation === 'subscription'
  },
  new WebSocketLink({
    uri: process.env.REACT_APP_GRAPHQL_SUB_URI,
    options: {
      reconnect: true,
    }
  }),
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })
)

const cache = new InMemoryCache(window.__APOLLO_STATE)

const client = new ApolloClient({
  link,
  cache
})

export default client
