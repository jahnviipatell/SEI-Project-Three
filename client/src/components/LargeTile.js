import React from 'react'




const LargeTile = ({ _id, name, description, image, season, duration, price }) => {

  return (
    <div div className="packages-container" key={_id} >
      <ul>
        <li>
          <div className="package-background">
            {image}
          </div>
          <div className="left">
            <div className="package-desciption">
              {description}
            </div>
            <div className="package-title">
              {name}
            </div>
            <div className="right">
              <ul>
                <li className="package-details">
                  {duration}
                </li>
                <li className="package-details">
                  {season}
                </li>
                <li className="package-details">
                  {price}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default LargeTile
