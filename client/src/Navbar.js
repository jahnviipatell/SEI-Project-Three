import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'

//! Add Login form - collapses

const MyNavbar = () => {

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img className="logo" src='/assets/logo_white_large.jpeg' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/map">Map</Nav.Link>
          <Nav.Link href="/register">Sign up</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar