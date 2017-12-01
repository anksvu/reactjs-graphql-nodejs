const mongoose = require('mongoose')
const { PubSub } = require('graphql-subscriptions')

const pubsub = new PubSub()

const student = new mongoose.Schema({
  name      : String,
  class     : String,
  phone     : Number,
  email     : String
}, {timestamps: true})

student.post('save', function(student) {
  pubsub.publish('STUDENT', {student: student})
})

const Student = mongoose.model('student', student)

const list = () => {
  return Student.find({}).then((students) => students)
}

const add = (input) => {
  let student = new Student(input.student)
  return student.save(function (err) {
    if (err) console.log(err)
  })
}

module.exports = {
  model : Student,
  list  : list,
  add   : add,
  pubsub: pubsub
}
