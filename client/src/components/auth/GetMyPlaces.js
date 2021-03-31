import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

const GetMyPlaces = (props) => {
  const [allMyPlaces, setAllMyPlaces] = useState(null)

  useEffect(() => {
    const getPlaces = async () => {
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
      <div>
        <div className="packages-shadow">

        </div>
        <div className="saved-overall-container">
          <Carousel id="carousel-container" className="saved-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/jonatan-pie-iokiwAq05UU-unsplash (1).jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/landon-arnold-PMdiRXbAbhY-unsplash.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="carousel-image"
                src="/assets/rory-hennessey-_NHfYFX0L2E-unsplash.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="saved-container">
          <ul className="saved-ul">
            {allMyPlaces.map(place => {
              return <li key={place._id} className="saved-li">
                <h1 className="saved-title">{place.nameOfDestination}</h1>
                <img
                  className="saved-img"
                  // id="carousel-image"
                  src={place.image}
                />
                <p className="hidden-lat">For Directions Use :
                  <br />
                  Lat.{place.latitude}
                  <br />
                  Long.{place.longitude}</p>
                {/* <p className="hidden-lat">{place.description}</p> */}
              </li>
            })}
          </ul>
          <div className="caption">
            <p className="welcome-caption">Welcome Back {props.username}!</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default GetMyPlaces