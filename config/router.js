import express from 'express'
import { getAllPlaces } from '../controllers/places.js'

const router = express.Router()

router.route('/places')
  .get(getAllPlaces)
