import React, { useEffect } from 'react'
import axios from 'axios'

const GetMyPlaces = (props) => {

  console.log(props)
  useEffect(() => {
    const getPlaces = async() => {
      const { data } = await axios.get('/api/profile/getmyplaces')
      const myPlaces = data.filter(item => {
        return props.savedPlaces.includes(item._id)
      })
      console.log(myPlaces)
    }
    getPlaces()
  }, [])


  return (
    <h1>Your stuff here</h1>
  )
}

export default GetMyPlaces