import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

const seedDatabase = async () => {
  try {
    //! Connect to database 
    await mongoose.connect(dbURI, { useNewUrlPasser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    //! Clear database
    await mongoose.connection.db.dropDatabase()
    console.log('👍 DB dropped')

  } catch (err) {
    console.log(err)
    await mongoose.connection.close()
    console.log('👋 Bye!')
  }
}
seedDatabase()