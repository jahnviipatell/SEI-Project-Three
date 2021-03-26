import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


const Minitile = () => {

  const [viewPort, setViewPort] = useState(null)
  console.log(setViewPort)

  useEffect(() => {
    console.log(viewPort)
    const getData = async () => {
      const response = await axios.get('/api/places')
      setViewPort(response.data)
    }
    getData()
  }, [])

  if (!viewPort) return null

  return (
    <>
      {
        viewPort.map(place => {
          return <Card style={{ width: '18rem' }} key={place._id}>
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
            <Card.Img variant="top" src={place.image} />
            <Card.Body>
              <Card.Title>{place.nameOfDestination}</Card.Title>
              <Card.Text>{place.typeOfDestination}</Card.Text>
              {/* <Button variant="primary">More details...</Button> */}
            </Card.Body>
          </Card>
        })
      }
    </>
  )

}

export default Minitile
