import Place from '../models/place.js'

//! INDEX Route
export const getAllPlaces = async (_req, res) => {
  try {
    const placesLibrary = await Place.find()
    console.log('PLACES LIBRARY >>>', placesLibrary)
    return res.status(200).json(placesLibrary)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

//! INDIVIDUAL Place Route
export const getOnePlace = async (req, res) => {
  try {
    const { id } = req.params
    const onePlace = await Place.findById(id)
    console.log('THE PLACE WE WANT >>>', onePlace)
    if (!onePlace) throw new Error()
    return res.status(200).json(onePlace)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}

// * Add comment to a show
export const addRatingToPlace = async (req, res) => {
  try {
    const { id } = req.params 
    const place = await Place.findById(id)
    if (!place) throw new Error('Cannot find place')
    const newRating = { ...req.body, owner: req.currentUser._id }
    place.ratings.push(newRating)
    await place.save()
    return res.status(200).json(place)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}