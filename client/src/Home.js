import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'



const Home = () => {

  const history = useHistory()

  const handleClick = (event) => {
    console.log(event)
    history.push('/packages')
  }

  return (
    <>
      <div className="logoHeader">
        <img src='/assets/logo_white_large.jpeg' />
      </div>
      <Button variant="outline-secondary" onClick={handleClick}>Explore All Packages</Button>{' '}
    </>
  )
}

export default Home