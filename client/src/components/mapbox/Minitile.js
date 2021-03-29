import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import Sonnet from 'react-bootstrap/Sonnet'


const Minitile = ({ _id, image, nameOfDestination, typeOfDestination, description }) => {

  // { _id, image, nameOfDestination, typeOfDestination, description }

  const [key, setKey] = useState('home')

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Main">
        {/* <Sonnet /> */}
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            <Card.Title>{nameOfDestination}</Card.Title>
            <Card.Text>{typeOfDestination}</Card.Text>
            <Card.Img variant="top" src={image} />
          </Card.Body>
        </Card>

      </Tab>
      <Tab eventKey="profile" title="Description">
        {/* <Sonnet /> */}
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Tab>
    </Tabs>
  )
}


// return (
//   <Card style={{ width: '18rem' }} key={_id}>
//     <Card.Header>
//       <Nav variant="tabs">
//         <Nav.Item>
//           <Nav.Link href="#first" eventKey="1">Main</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="#link" eventKey="2">Description</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Card.Header>
//     <Card.Img variant="top" src={image} />

//     <Card.Body eventKey="1">
//       <Card.Title>{nameOfDestination}</Card.Title>
//       <Card.Text>{typeOfDestination}</Card.Text>
//       {/* <Button variant="primary">More details...</Button> */}
//     </Card.Body>
//     <Card.Body eventKey="2">
//       <Card.Title>Description</Card.Title>
//       <Card.Text>{description}</Card.Text>
//       {/* <Button variant="primary">More details...</Button> */}
//     </Card.Body>
//   </Card>
// )


export default Minitile
