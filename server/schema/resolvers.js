const Student = require('../models/student')

const resolvers = {
  Query: {
    students: () => Student.list(),
  },
  Mutation: {
    addStudent: (root, args, context) => {
      return Student.add(args)
    },
  },
}

module.exports = resolvers