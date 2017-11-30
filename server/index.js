const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const gse = require('graphql-server-express')
const schema = require('./schema')
require('dotenv').config()
const mongoose = require('mongoose')


// mongodb
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL,
  {useMongoClient: true})

// graphql
app.use('/graphql', bodyParser.json(),
  gse.graphqlExpress(
    req => ({
      schema: schema
    })
  )
)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(
  path.resolve(__dirname, '../client', 'build')))
  module.exports = app
}
else {
  const microCors = require('micro-cors')
  const cors = microCors({ origin: process.env.CORS_ORIGIN })
  app.use('/graphiql', gse.graphiqlExpress({
    endpointURL: '/graphql'
  }))
  module.exports = cors(app)
}
