import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetMyPlaces = (props) => {
  const [allMyPlaces, setAllMyPlaces] = useState(null)
  
  useEffect(() => {
    const getPlaces = async() => {
      const { data } = await axios.get('/api/profile/getmyplaces')
      const myPlaces = data.filter(item => {
        return props.savedPlaces.includes(item._id)
      })
      setAllMyPlaces(myPlaces)
    }
    getPlaces()
  }, [])

  if (!allMyPlaces) return null

  return (
    <>
      <h1>Your stuff here</h1>
      {allMyPlaces.map(place => {
        return <h2 key={ place._id }>{place.nameOfDestination}</h2>
      })}
    </>
    
  )
}

export default GetMyPlaces