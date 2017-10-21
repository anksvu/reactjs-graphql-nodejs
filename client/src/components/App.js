import React from 'react'
import { gql, graphql } from 'react-apollo'

const myQuery = gql`{ hello }`

class App extends React.Component {
  render() {
    return <h1>{this.props.data.hello}</h1>
  }
}

export default graphql(myQuery)(App)
