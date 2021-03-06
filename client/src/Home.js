import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'


const Home = () => {

  const history = useHistory()

  const handleClick = (event) => {
    console.log(event)
    history.push('/packages')
  }
  const handleClickMap = (event) => {
    console.log(event)
    history.push('/map')
  }

  return (
    <>
      <div className="homepage">
        <div className="homepage-container">
          <img className="logo-homepage" src='/assets/logo_white_large.jpeg' />
          <p className="homepage-subtitle">Get behind the wheel and explore.</p>
          <div className="homepage-buttons">
            <Button className="button" onClick={handleClick}>EXPLORE ALL PACKAGES</Button>{' '}
            <Button className="button" onClick={handleClickMap}>CREATE CUSTOM TRIP</Button>{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home