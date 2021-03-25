import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { getAllPlaces, getOnePlace } from '../controllers/places.js'




const router = express.Router()

router.route('/places')
  .get(getAllPlaces)

router.route('/places/:id')
  .get(getOnePlace)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)


export default router