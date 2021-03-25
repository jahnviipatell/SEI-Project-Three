import Place from '../models/place.js'

//! INDEX Route
export const getAllPlaces = async (_req, res) => {
  const placesLibrary = await Place.find()
  console.log('PLACES LIBRARY >>>', placesLibrary)
  return res.status(200).json(placesLibrary)
}