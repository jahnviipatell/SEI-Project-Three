import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllPackages, getOnePackage } from '../controllers/packages.js'
import { getAllPlaces, getOnePlace } from '../controllers/places.js'




const router = express.Router()

router.route('/places')
  .get(getAllPlaces)

router.route('/places/:id')
  .get(getOnePlace)

router.route('/packages')
  .get(getAllPackages)

router.route('/packages/:id')
  .get(getOnePackage)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router