import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
// import ShowPage from './ShowPage'
>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8


const LargeTile = (props) => {


  // const history = useHistory()

  // const handleClick = (event) => {
  //   console.log(event)
  //   history.push('/packages/:id')
  // }


  return (
    <>
<<<<<<< HEAD
      <Link to={`/packages/${_id}`} key={_id}>
        <li className="packages-li" key={_id}>
          <div className="packages-li-container">
            <img src={image} className="package-background" key={_id} />
            <div className="left">
              <div className="package-title">
                {name}
=======
      <Link to={`/packages/${props.packageNumber}`} style={{ textDecoration: 'none' }}>
        <li className="packages-li" key={props._id}>
          <div className="packages-li-container">
            <img src={props.image} className="package-background" key={props._id} />
            <div className="left">
              <div className="package-title">
                {props.name}
>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8
              </div>
              <div className="right" >
                <ul className="package-details-ul">
                  <li className="package-details">
<<<<<<< HEAD
                    {duration} days
                  </li>
                  <li className="package-details">
                    {season}
                  </li>
                  <li className="package-details">
                    £{price}pp
=======
                    {props.duration} days
                  </li>
                  <li className="package-details">
                    {props.season}
                  </li>
                  <li className="package-details">
                    £{props.price}pp
>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8
                  </li>
                </ul>
              </div>
            </div>
            <div className="description-tile">
<<<<<<< HEAD
              <div className="hover-area" >
                <p className="tile-description">
                  {description}
=======
              <div className="hover-area">
                {/* <div className="hover-area" onClick={handleClick}> */}
                <p className="tile-description">
                  {props.description}
>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8
                </p>
              </div>
            </div>
          </div>
        </li >
<<<<<<< HEAD
      </Link>  
=======
      </Link>

>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8
    </>
  )
}

export default LargeTile
