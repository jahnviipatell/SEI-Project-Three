import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import ShowPackageTile from './ShowPackageTile'
// import AllPackages from './AllPackages.js'
import { useParams } from 'react-router-dom'


<<<<<<< HEAD
const ShowPage = ( ...props ) => {
  console.log(AllPackages)
  console.log('props', props)
=======
const ShowPage = () => {
  // console.log(AllPackages)
  // console.log('props', props)
  const { id } = useParams()
>>>>>>> f81b5a7113f42c5f54ef4753427e3db542584eb8

  const [viewPort, setViewPort] = useState({
    latitude: 64.842827,
    longitude: -18.164241,
    zoom: 5,
    bearing: 0,
    pitch: 0
  })



  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      console.log('data', data)
      const packageData = data.filter(item => {
        return item.packages.filter(index => {
          return index === id
        })
      })
      // console.log('packageData', packageData)
      setLocations(packageData)
    }
    getData()
  }, [])

  // console.log(props.name)

  if (locations.length < 1) return null 

  // console.log('locations', locations)



  return (
    <>
      <div className="map-container">
        <ReactMapGL
          {...viewPort}
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/light-v10' >
          {locations.map(location => { 
            return <Marker key ={location._id} latitude={location.latitude} longitude={location.longitude}>
              <p>{location.icon}</p>
            </Marker>
          })
          }
        </ReactMapGL>
        <div className="map-controller"> 
          {locations.map(location => {
            return <ShowPackageTile 
              key={location._id}
              { ...location}/>
          })}

        </div> 

      </div> 
    </>



  )

}

export default ShowPage
