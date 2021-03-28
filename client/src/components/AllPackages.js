import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LargeTile from './LargeTile'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Navbar from '../Navbar'



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
      <Navbar className="nav-grey" />
      <div className="page-container">
        <div div className="packages-container">
          <div className="video-container">
            <video src={ } autoplay="true" />
          </div>
          <div className="button-bar">
            <div className="bootstrap-button">
              <DropdownButton id="dropdown-basic-button" variant="light" title="Season">{' '}
                <Dropdown.Item href="/packages/summer">Summer</Dropdown.Item>
                <Dropdown.Item href="/packages/winter">Winter</Dropdown.Item>
                <Dropdown.Item href="/packages">All</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="bootstrap-button">
              <DropdownButton id="dropdown-basic-button" variant="light" title="Duration">{' '}
                <Dropdown.Item href="#/packages/summer">7 Days</Dropdown.Item>
                <Dropdown.Item href="#/packages/winter">8 Days</Dropdown.Item>
                <Dropdown.Item href="#/packages/winter">10 Days</Dropdown.Item>
                <Dropdown.Item href="#/packages">All</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
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
