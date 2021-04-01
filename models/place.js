import mongoose from 'mongoose'

// * Schema for the ratings
const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const placeSchema = new mongoose.Schema({
  nameOfDestination: { type: String, required: true },
  typeOfDestination: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  icon: { type: String, required: true },
  packageId: { type: Number },
  winterAccess: { type: Boolean, required: true },
  star: { type: String },
  day1: { type: Boolean, required: true },
  day2: { type: Boolean, required: true },
  day3: { type: Boolean, required: true },
  day4: { type: Boolean, required: true },
  day5: { type: Boolean, required: true },
  day6: { type: Boolean, required: true },
  day7: { type: Boolean, required: true },
  day8: { type: Boolean, required: true },
  day9: { type: Boolean, required: true },
  day10: { type: Boolean, required: true },
  packageNumber: { type: Number, required: true },
  packages: [{ type: Number, required: true }],
  packageName: [{ type: String, required: true }],
  ratings: [ratingSchema]
})

// * Calculate avg rating
placeSchema
  .virtual('avgRating')
  .get(function() {
    if (!this.ratings.length) return 'Not yet rated'
    const sum = this.ratings.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0)
    return (sum / this.ratings.length).toFixed(2)
  })

// ! INCLUDE virtual fields when returning JSON response 
placeSchema.set('toJSON', { virtuals: true })


export default mongoose.model('Place', placeSchema)