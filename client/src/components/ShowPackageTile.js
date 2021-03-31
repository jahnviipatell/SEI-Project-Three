
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Media from 'react-bootstrap/Media'
// import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'


const ShowPackageTile = () => {

  // const { id } = useParams()
  const [locations, setLocations] = useState([])
  const [day, setDay] = useState(null)

  const handleClick = (event) => {
    console.log('CLICKED', event.target.value)
    setDay(event.target.value)
  }
  console.log('day', day)
  console.log('locations', locations)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      // console.log('data', data)
      // const packageData = data.filter(item => {
      //   return item.packages.includes(parseInt(id))
      // })
      const dayOne = data.filter(item => {
        return item.day1 === true
      })
      const dayTwo = data.filter(item => {
        return item.day2 === true
      })
      if (day === 'dayOne') {
        setLocations(dayOne)
      } else if (day === 'dayTwo') {
        setLocations(dayTwo)
      } else {
        setLocations(dayOne)
      }
      // console.log('packageData', packageData)
      // setLocations(packageData)
      console.log('dayOne', dayOne)
      console.log('dayTwo', dayTwo)
    }
    getData()
  }, [day])


  if (!locations) return null

  return (
    <>
      <div className="button-container">
        <button value="dayOne" onClick={handleClick}>1</button>
        <button value="dayTwo" onClick={handleClick}>2</button>
      </div>
      <div className="days-container">

      </div>
    </>
  )






}

export default ShowPackageTile



// {locations.map(location => {
//   return <h1 key={location._id}>
//     {location.nameOfDestination}
//   </h1>
// })}
{/* <Media> */ }
{/* <Media.Body> */ }
{/* <h5>Accomodation</h5> */ }
{/* <h6>{hotelName}</h6> */ }
{/* <p>    */ }
//          //<img
//             width={250}
//             height={150}
//             className="float-left mr-2 mb-1"
//             src={hotelImage}
//             alt="Generic placeholder"
//           />
//           {hotelDescription}
//         </p>
//       </Media.Body>
//     </Media>

//     <Media>
//       <Media.Body>
//         <h5>Restaurants</h5>
//         <h6>{restaurantName}</h6>
//         <p>   
//           <img
//             width={250}
//             height={150}
//             className="float-left mr-2 mb-1"
//             src={restaurantImage}
//             alt="Generic placeholder"
//           />
//           {restaurantDescription}
//         </p>
//       </Media.Body>
//     </Media> */}