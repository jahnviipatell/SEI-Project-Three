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