const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/icelander'
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'This is a secret'

export default {
  dbURI,
  port,
  secret
}