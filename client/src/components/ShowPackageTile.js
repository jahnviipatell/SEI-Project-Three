
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Media from 'react-bootstrap/Media'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ShowTile from './ShowTile'


const ShowPackageTile = () => {

  const { id } = useParams()
  const [locations, setLocations] = useState([])
  const [day, setDay] = useState([])

  const handleClick = (event) => {
    console.log('CLICKED', event.target.value)
    setDay(event.target.value)
  }
  console.log('day', day)
  console.log('locations', locations)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      // console.log('data', data)
      // const packageData = data.filter(item => {
      //   return item.packages.includes(parseInt(id))
      // })
      const dayOne = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day1 === true)
      })
      const dayTwo = data.filter(item => {
        return (item.packages.includes(parseInt(id)) && item.day2 === true)
      })
      if (day === 'dayOne') {
        setLocations(dayOne)
      } else if (day === 'dayTwo') {
        setLocations(dayTwo)
      } else {
        setLocations(dayOne)
      }
      // console.log('packageData', packageData)
      // setLocations(packageData)
      // console.log('dayOne', dayOne)
      // console.log('dayTwo', dayTwo)
    }
    getData()
  }, [day])


  if (!locations) return null

  return (
    <>
      <div className="button-container">
        <button value="dayOne" onClick={handleClick}>1</button>
        <button value="dayTwo" onClick={handleClick}>2</button>
      </div>
      <div className="days-container">
        <ul>
          {locations.map(item => {
            return <ShowTile
              key={item._id}
              {...item}
            />
          })}
        </ul>
      </div>
    </>
  )

}

export default ShowPackageTile

