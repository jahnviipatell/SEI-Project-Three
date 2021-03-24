import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  icon: { type: String }
})

export default mongoose.model('Place', placeSchema)