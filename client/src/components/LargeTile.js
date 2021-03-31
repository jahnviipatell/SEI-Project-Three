import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import ShowPage from './ShowPage'


const LargeTile = (props) => {


  return (
    <>
      <Link to={`/packages/${props.packageNumber}`} style={{ textDecoration: 'none' }}>
        <li className="packages-li" key={props._id}>
          <div className="packages-li-container">
            <img src={props.image} className="package-background" key={props._id} />
            <div className="left">
              <div className="package-title">
                {props.name}
              </div>
              <div className="right" >
                <ul className="package-details-ul">
                  <li className="package-details">
                    {props.duration} days
                  </li>
                  <li className="package-details">
                    {props.season}
                  </li>
                  <li className="package-details">
                    £{props.price}pp
                  </li>
                </ul>
              </div>
            </div>
            <div className="description-tile">
              <div className="hover-area">
                {/* <div className="hover-area" onClick={handleClick}> */}
                <p className="tile-description">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </li >
      </Link>

    </>
  )
}

export default LargeTile
