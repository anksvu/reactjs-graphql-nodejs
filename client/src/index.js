import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient,
  ApolloProvider,
  createNetworkInterface } from 'react-apollo'

import App from './components/App'

const client = new ApolloClient({
  networkInterface: createNetworkInterface(
    { uri: process.env.REACT_APP_GRAPHQL_URI })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)