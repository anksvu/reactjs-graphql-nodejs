const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const gse = require('graphql-server-express')
const { SubscriptionServer } = require(
  'subscriptions-transport-ws')
const {execute, subscribe} = require('graphql')
const schema = require('./schema')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')


// mongodb
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL,
  {useMongoClient: true})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(
  path.resolve(__dirname, '../', 'build')))
}
else {
  app.use(cors())
  app.use('/graphiql', gse.graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:3000/subscriptions`
  }))
}

// graphql
app.use('/graphql', bodyParser.json(),
  gse.graphqlExpress(
    req => ({
      schema: schema
    })
  )
)

const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}! # ` +
    Date())
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: http,
    path: '/subscriptions'
  })
})
