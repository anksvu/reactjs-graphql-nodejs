import React from 'react'
import { gql, graphql } from 'react-apollo'


class App extends React.Component {
  render() {
    const {data: {loading, error, students}} = this.props
    if (loading) {
      return <div>Loading</div>
    }
    else if (error) {
      return <div>{error}</div>
    }
    else {
      return students.map((student, i) =>
        <li key={i}>{student.name}</li>)
    }
  }
}

const studentsQuery = gql`{
  students {
    name
    phone
    class
    email
  }
}`

export default graphql(studentsQuery)(App)
