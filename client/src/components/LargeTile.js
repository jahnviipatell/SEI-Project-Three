import React from 'react'


const LargeTile = ({ _id, image, name, description, season, duration, price }) => {

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
        <div className="packages-li-container">
          <img src={image} className="package-background" key={_id} />
          <div className="left">
            <div className="package-title">
              {name}
            </div>
            <div className="right">
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
            <p>{description}</p>
          </div>
        </div>
      </li >
    </>
  )
}

export default LargeTile
