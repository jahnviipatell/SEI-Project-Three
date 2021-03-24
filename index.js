import express from 'express'
import mongoose from 'mongoose'


const app = express()

const port = 4000

const dbURI = 'mongodb://localhost/icelander'

const startServer = async () => {
  try {
    //! Connect to mongo
    await mongoose.connect(dbURI, { useNewUrlPasser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    //! Body parser
    app.use(express.json())

    //! Server
    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))

  } catch (err) {
    console.log('🚨 Something went wrong starting the app')
    console.log(err)
  }
}
startServer()

