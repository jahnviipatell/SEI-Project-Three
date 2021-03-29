import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'
import ShowPackageTile from './ShowPackageTile'
import AllPackages from './AllPackages.js'


const ShowPage = ( ...props) => {
  console.log(AllPackages)
  console.log('props', props)

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
      // console.log('data', data)
      const packageData = data.filter(item => {
        return item.packages.includes(props.name)
      })
      // console.log('packageData', packageData)
      setLocations(packageData)
    }
    getData()
  }, [])

  console.log(props.name)

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
          mapStyle='mapbox://styles/mapbox/streets-v11' >

        </ReactMapGL>
        <div className="map-controller"> 
          {locations.map(location => {
            <ShowPackageTile 
              key={location._id}
              { ...location}/>
          })}
         

        </div> 

      </div> 
    </>



  )



}

export default ShowPage
