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
      <div className="page-container">
        <div div className="packages-container">
          <ul className="packages-ul">
            {packages.map(trip => (
              <LargeTile key={trip._id} {...trip} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )

}

export default AllPackages
