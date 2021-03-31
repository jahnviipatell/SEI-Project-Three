import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  nameOfDestination: { type: String, required: true, unique: true },
  typeOfDestination: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String, required: true },
  packageId: { type: Number },
  winterAccess: { type: Boolean, required: true },
  star: { type: String },
  day: [{ type: Number, required: true }],
  packages: [{ type: Number, required: true }],
  packageName: [{ type: String, required: true }]
})

export default mongoose.model('Place', placeSchema)