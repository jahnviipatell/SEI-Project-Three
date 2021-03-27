import mongoose from 'mongoose'

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String },
  duration: { type: Number, required: true },
  image: { type: String, required: true },
  reviewRating: { type: Number },
  season: { type: String }
})

export default mongoose.model('Package', packageSchema)