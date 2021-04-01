import Package from '../models/package.js'

//! INDEX Route
export const getAllPackages = async (_req, res) => {
  try {
    const packagesLibrary = await Package.find()
    console.log('PACKAGES LIBRARY >>>', packagesLibrary)
    return res.status(200).json(packagesLibrary)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}

//! INDIVIDUAL Place Route
export const getOnePackage = async (req, res) => {
  try {
    const { id } = req.params
    const onePackage = await Package.findById(id)
    console.log('THE PACKAGE WE WANT >>>', onePackage)
    if (!onePackage) throw new Error()
    return res.status(200).json(onePackage)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}
