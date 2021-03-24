import mongoose from 'mongoose'

const placesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  icon: { type: String, required: true }
})

export default mongoose.model('Places', placesSchema)