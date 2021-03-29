
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom'


const ShowPackageTile = ( props ) => {

  // console.log('yes showpackage tile works')
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      // console.log('data', data)
      const packageData = data.filter(item => {
        return item.packages.includes(props.name)
      })
      setLocations(packageData)
    }
    getData()
  }, [])

  // console.log(props.name)

  if (!locations) return null 

  console.log('locations', locations)

  return (
    
    <>
      <Link to={`/packages/${props._id}`} key={props._id}>
        <h1>{locations.nameOfDestination}</h1>
      </Link>
      {/* <Media>
        <Media.Body>
          <h4>{title}</h4>
          <h5>{subTitle}</h5>
          <h6>{day}</h6>
          <p>   
            <img
              width={250}
              height={150}
              className="float-left mr-2 mb-1"
              src={image}
              alt="Generic placeholder"
            />
            {description}
          </p>
        </Media.Body>
      </Media>
          
      <Media>
        <Media.Body>
          <h5>Accomodation</h5>
          <h6>{hotelName}</h6>
          <p>   
            <img
              width={250}
              height={150}
              className="float-left mr-2 mb-1"
              src={hotelImage}
              alt="Generic placeholder"
            />
            {hotelDescription}
          </p>
        </Media.Body>
      </Media>
          
      <Media>
        <Media.Body>
          <h5>Restaurants</h5>
          <h6>{restaurantName}</h6>
          <p>   
            <img
              width={250}
              height={150}
              className="float-left mr-2 mb-1"
              src={restaurantImage}
              alt="Generic placeholder"
            />
            {restaurantDescription}
          </p>
        </Media.Body>
      </Media> */}
    </>
  )



}

export default ShowPackageTile