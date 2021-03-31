import User from '../models/user.js'
import Place from '../models/place.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('User not found')
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

export const addSavedPlace = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('Cannot find user')
    const newSavedPlace = await Place.findById(req.body._id)
    console.log('PLACE ID>>>', typeof newSavedPlace)
    user.savedPlaces.addToSet(newSavedPlace)
    await user.save()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}