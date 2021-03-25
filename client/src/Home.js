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
    <>
      <h1>
        {places[0].nameOfDestination}
        {places[0].typeOfDestination}
        {places[0].star}
      </h1>
      <div>
        <img src={places[0].image} />
      </div>
    </>
  )
}

export default Home