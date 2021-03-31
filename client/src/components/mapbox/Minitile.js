import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import axios from 'axios'


const Minitile = ({ _id, image, nameOfDestination, typeOfDestination, description }) => {

  const [key, setKey] = useState('home')

  const handleClick = async () => {
    await axios.patch(`/api/places/${_id}`, )
  }

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
          </Card.Body>
        </Card>
      </Tab>
      <Tab eventKey="save" title="Save">
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            <Card.Text>Save to profile:
              <button type="button" onClick={handleClick}>Save!</button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Tab>
    </Tabs >
  )
}


export default Minitile
