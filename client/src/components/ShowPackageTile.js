
import React from 'react'
// import axios from 'axios'
import Media from 'react-bootstrap/Media'
// import { Link } from 'react-router-dom'


const ShowPackageTile = ( props ) => {


  return (
    
    <Media> 
      <Media.Body>
        <h6>{props.typeOfDestination} : {props.nameOfDestination}</h6>
        <h6>Day: {props.day[0]}</h6>
        <p>   
          <img
            width={250}
            height={150}
            className="float-left mr-2 mb-1"
            src={props.image}
            alt="Generic placeholder"
          />
          {props.description}
        </p>
      </Media.Body>
    </Media>
  )
          

  



}

export default ShowPackageTile

{/* <Media> */}
{/* <Media.Body> */}
{/* <h5>Accomodation</h5> */}
{/* <h6>{hotelName}</h6> */}
{/* <p>    */}
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