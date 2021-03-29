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
  star: { type: String }
})



const daySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  day: { type: Number, required: true },
  description: { type: String, required: true  },
  image: { type: String, required: true  },
  places: [placeSchema]
})


export default mongoose.model('Day', daySchema)