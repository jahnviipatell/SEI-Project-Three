import User from '../models/user.js'
import Package from '../models/package.js'

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

export const addSavedPackage = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('Cannot find user')
    const newSavedPackage = await Package.findById(req.body._id)
    console.log('PACKAGE ID>>>', typeof newSavedPackage)
    user.savedPackages.addToSet(newSavedPackage._id)
    await user.save()
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}