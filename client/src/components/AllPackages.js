import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LargeTile from './LargeTile'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel'
// import ShowPage from './ShowPage'
// import { Link } from 'react-router-dom'



const AllPackages = () => {

  // console.log(ShowPage)

  const [packages, setPackages] = useState([])
  // console.log(setPackageData)

  //! UNCOMMENT BELOW
  const [toggle, setToggle] = useState(null)
  console.log('toggle >>>', toggle)

  const handleClick = (event) => {
    console.log('CLICKED', event.target.value)
    setToggle(event.target.value)
  }

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      const summerPackages = data.filter(item => {
        return (item.season === 'Summer')
      })
      const winterPackages = data.filter(item => {
        return (item.season === 'Winter')
      })
      if (toggle === 'Summer') {
        setPackages(summerPackages)
      } else if (toggle === 'Winter') {
        setPackages(winterPackages)
      } else {
        setPackages(data)
      }
      console.log('Summer packages', summerPackages)
      console.log('Winter packages', winterPackages)
    }
    getData()
  }, [toggle])




  if (packages.length < 1) return null
  console.log('PACKAGES>>>>', packages)

  return (
    <>
      <div className="packages-shadow">

      </div>
      <div className="caption">
        <p className="p-caption">Explore Iceland</p>
      </div>
      <Navbar className="nav-grey" />
      <div div className="packages-container">
        <div>
          <Carousel id="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jeremy-bishop-h7bQ8VEZtws-unsplash.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jon-flobrant-tSsb28hzZSI-unsplash.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/daniel-schoibl-oRNruBJQqfo-unsplash.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="scroll-filter">
          <div className="button-bar">
            <div className="drop-downs">
              {/* <div className="bootstrap-button">
                <DropdownButton id="dropdown-basic-button" variant="light" title="Duration" className="bring-to-front">{' '}
                  <Dropdown.Item href="#/packages/summer">7 Days</Dropdown.Item>
                  <Dropdown.Item href="#/packages/winter">8 Days</Dropdown.Item>
                  <Dropdown.Item href="#/packages/winter">10 Days</Dropdown.Item>
                  <Dropdown.Item href="#/packages">All</Dropdown.Item>
                </DropdownButton>
              </div> */}
            </div>
          </div>
          <div className="filters">
            <button className="filter-button" value="Summer" onClick={handleClick}>Summer</button>
            <button className="filter-button" value="Winter" onClick={handleClick}>Winter</button>
            <button className="filter-button" value="All" onClick={handleClick}>All</button>
          </div>
          <ul className="packages-ul" id="no-scroll1">
            {packages.map(trip => (
              // <Link to={`/packages/${trip._id}`} key={trip._id}>
              <LargeTile key={trip._id} {...trip} />
              // </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  )

}

export default AllPackages
