const typedefs = `
  type Student {
    name      : String,
    class     : String,
    phone     : Int,
    email     : String
  },
  input StudentInput {
    name      : String,
    class     : String,
    phone     : Int,
    email     : String
  },
  type Query {
    students: [Student]
  }
  type Mutation {
    addStudent(student: StudentInput): Student
  }
  type Subscription {
    student: Student
  }
`

module.exports =  typedefs