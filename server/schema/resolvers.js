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
  Subscription: {
    student: {
      subscribe: () => Student.pubsub.asyncIterator('STUDENT')
    }
  }
}

module.exports = resolvers
