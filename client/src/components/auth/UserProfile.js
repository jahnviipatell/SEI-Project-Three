import React, { useEffect } from 'react'
import axios from 'axios'

const UserProfile = () => {

  useEffect(() => {
    const getUser = async() => {
      const token = window.localStorage.getItem('token')
      const response = await axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
    }
    getUser()
  }, [])

  return (
    <h1>Hello</h1>
  )
}

export default UserProfile
