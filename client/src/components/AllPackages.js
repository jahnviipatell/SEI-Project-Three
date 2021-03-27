import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LargeTile from './LargeTile'


const AllPackages = () => {

  const [packages, setPackages] = useState(null)
  // console.log(setPackageData)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/packages')
      setPackages(response.data)
    }
    getData()
  }, [])

  if (!packages) return null

  return (
    <>
      <ul>
        {packages.map(trip => (
          <li key={trip._id}>
            <LargeTile key={trip._id} {...trip} />
          </li>
        ))}
      </ul>
    </>
  )

}

export default AllPackages
