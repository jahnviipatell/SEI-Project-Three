import React from 'react'
import { useHistory } from 'react-router-dom'


const LargeTile = ({ _id, image, name, description, season, duration, price }) => {


  const history = useHistory()

  const handleClick = (event) => {
    console.log(event)
    history.push('/packages/:id')
  }


  return (
    <>
      <li className="packages-li" key={_id}>
        <div className="packages-li-container">
          <img src={image} className="package-background" key={_id} />
          <div className="left">
            <div className="package-title">
              {name}
            </div>
            <div className="right" >
              <ul className="package-details-ul">
                <li className="package-details">
                  {duration} days
                </li>
                <li className="package-details">
                  {season}
                </li>
                <li className="package-details">
                  £{price}pp
                </li>
              </ul>
            </div>
          </div>
          <div className="description-tile">
            <div className="hover-area" onClick={handleClick}>
              <p className="tile-description">
                {description}
              </p>
            </div>
          </div>
        </div>
      </li >
    </>
  )
}

export default LargeTile
