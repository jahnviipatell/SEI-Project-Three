import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios'
import { userIsAuthenticated } from '../auth/helpers/auth'
import StarRating from '../Ratings'


const Minitile = ({ _id, image, nameOfDestination, typeOfDestination, description, avgRating }) => {

  const [key, setKey] = useState('home')
  const [saved, setSaved] = useState('Save!')
  const [button, setButton] = useState(true)

  const handleClick = async () => {
    setSaved('Saved! View your profile to see your saved places.')
    setButton(false)
    const token = window.localStorage.getItem('token')
    await axios.patch(`/api/places/${_id}`, { _id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('YAY! I SAVED A PLACE AND NOW I CANNOT FIND IT!')
  }
  console.log(_id)
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Main">
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            <Card.Title>{nameOfDestination}</Card.Title>
            <Card.Text>{typeOfDestination}</Card.Text>
            <Card.Img variant="top" src={image} />
          </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="profile" title="Description">
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Average rating: {avgRating}</Card.Text>
          </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="save" title="Save">
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            {userIsAuthenticated() ?
              <Card.Text>
                {button ?
                  <Card.Text>Save to profile:
                    <button type="button" className="button save-to-profile" onClick={handleClick}>{saved}</button>
                    <StarRating _id={_id} />
                  </Card.Text>
                  :
                  <p>{saved}</p>

                }
              </Card.Text>
              :
              <>
                <Card.Text>Login to save to profile</Card.Text>
                
              </>
            }
          </Card.Body>
        </Card>
      </Tab>
    </Tabs >
  )
}


export default Minitile
