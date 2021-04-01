import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import ShowPage from './ShowPage'
import Media from 'react-bootstrap/Media'


const ShowTile = (props) => {


  return (
    <>
      <li className="show">
        <Media>
          <Media.Body>
            <h4 className="type-title">{props.typeOfDestination} : {props.nameOfDestination}</h4>
            <p className="show-p">
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
      </li>
    </>
  )
}

export default ShowTile