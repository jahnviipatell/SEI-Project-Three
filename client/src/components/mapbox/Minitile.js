import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


const Minitile = ({ _id, image, nameOfDestination, typeOfDestination }) => {

  return (
    <Card style={{ width: '18rem' }} key={_id}>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Main</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Description</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nameOfDestination}</Card.Title>
        <Card.Text>{typeOfDestination}</Card.Text>
        {/* <Button variant="primary">More details...</Button> */}
      </Card.Body>
    </Card>
  )

}

export default Minitile
