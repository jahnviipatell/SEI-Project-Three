import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllPackages, getOnePackage } from '../controllers/packages.js'
import { addRatingToPlace, getAllPlaces, getOnePlace } from '../controllers/places.js'
import { addSavedPlace, getUserProfile } from '../controllers/users.js'
import { getAllDays } from '../controllers/days.js'
import { secureRoute } from './secureRoute.js'




const router = express.Router()

router.route('/places')
  .get(getAllPlaces)

router.route('/places/:id')
  .get(getOnePlace)
  .patch(secureRoute, addSavedPlace)

router.route('/places/:id/ratings')
  .post(secureRoute, addRatingToPlace)


router.route('/packages')
  .get(getAllPackages)

router.route('/packages/:id')
  .get(getOnePackage)

router.route('/days')  
  .get(getAllDays)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)

router.route('/profile/getmyplaces')
  .get(getAllPlaces)
  

export default router