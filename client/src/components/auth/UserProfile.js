import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GetMyPlaces from './GetMyPlaces'

const UserProfile = () => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUser = async() => {
      const token = window.localStorage.getItem('token')
      const response = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserData(response.data)
    }
    getUser()
  }, [])

  if (!userData) return null
  console.log(userData)
  // useEffect(() => {
  //   const getPlaces = async() => {
  //     const placesResponse = await axios.get('/api/places')
  //     console.log(placesResponse)
  //   }
  //   getPlaces()
  // }, [])

  return (
    <>
      <h1>Hello</h1>
      <Link to='/profile/getmyplaces'>
        <GetMyPlaces { ...userData } />
      </Link>
    </>
  )
}

export default UserProfile
