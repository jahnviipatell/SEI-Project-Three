import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Home = () => {

  const [places, setPlaces] = useState(null)
  useEffect(() => {
    console.log(places)
    const getData = async () => {
      const response = await axios.get('/api/places')
      setPlaces(response.data)
    }
    getData()
  }, [])

  if (!places) return null

  return (
    <h1>{places[0].name}</h1>
  )
}

export default Home