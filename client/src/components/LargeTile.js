import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'


const LargeTile = ({ _id, image, name, description, season, duration, price }) => {

  const history = useHistory()

  const handleClick = (event) => {
    console.log(event)
    history.push('api/packages:id')
  }

  return (
    <>
      <li className="packages-li"
        // style={
        //   { backgroundImage: `url('${image}')` },
        //   { backgroundSize: 'cover' },
        //   { backgroudRepeat: 'no-repeat' },
        //   { backgrroundPosition: 'center' }
        // }
        key={_id}>
        {/* <div className="package-flip"> */}
        <div className="packages-li-container">
          <img src={image} className="package-background" key={_id} />
          <div className="left">
            <div className="package-title">
              {name}
            </div>
            <div className="right" >
              <ul className="package-details-ul">
                <li className="package-details">
                  Duration: {duration} days
                </li>
                <li className="package-details">
                  Available: {season}
                </li>
                <li className="package-details">
                  £{price}pp
                </li>
              </ul>
            </div>
          </div>
          <div className="description-tile">
            <p className="tile-description">{description}</p>
            <Button className="button" id="more-details" onClick={handleClick}>More Details</Button>{' '}
          </div>
        </div>
        {/* </div> */}
      </li >
    </>
  )
}

export default LargeTile
