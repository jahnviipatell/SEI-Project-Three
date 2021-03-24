import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'

const app = express()

const startServer = async () => {
  try {
    //! Connect to mongo
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    //! Body parser
    app.use(express.json())

    //! Middleware
    app.use((req, _res, next) => {
      console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
      next()
    })

    //! Run the router
    app.use(router)

    //! Server
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))

  } catch (err) {
    console.log('🚨 Something went wrong starting the app')
    console.log(err)
  }
}
startServer()

