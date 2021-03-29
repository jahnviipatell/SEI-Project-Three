import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const Minitile = ({ _id, image, nameOfDestination, typeOfDestination, description }) => {

  const [key, setKey] = useState('home')

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
    </Tabs >
  )
}


export default Minitile
