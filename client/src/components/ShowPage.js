import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl'
import ShowPackageTile from './ShowPackageTile'
// import AllPackages from './AllPackages.js'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'


const ShowPage = () => {
  // console.log(AllPackages)
  // console.log('props', props)
  const { id } = useParams()

  const [viewPort, setViewPort] = useState({
    latitude: 64.842827,
    longitude: -22.164241,
    zoom: 5.75,
    bearing: 0,
    pitch: 0
  })

  const [locations, setLocations] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      // console.log('data', data)
      const packageData = data.filter(item => {
        return item.packages.includes(parseInt(id))
      })
      // console.log('packageData', packageData)
      setLocations(packageData)
    }
    getData()
  }, [])

  // console.log(props.name)

  if (locations.length < 1) return null

  const handleFlyClick = (event) => {
    setViewPort({
      ...viewPort,
      longitude: Number(event.target.dataset.longitude),
      latitude: Number(event.target.dataset.latitude),
      zoom: 8,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator()
      // transitionEasing: d3.easeCubic
    })
  }
  // console.log('locations', locations)

  return (
    <>
      <Navbar className="nav-grey" />
      <div className="map-container">
        <ReactMapGL
          {...viewPort}
          onViewportChange={(viewPort) => setViewPort(viewPort)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/light-v10' >
          {locations.map(location => {
            return <Marker key={location._id} latitude={location.latitude} longitude={location.longitude}>
              <p onClick={handleFlyClick} data-latitude={location.latitude} data-longitude={location.longitude}>{location.icon}</p>
            </Marker>
          })
          }
        </ReactMapGL>
        <div className="map-controller" id="no-scroll1" style={{ height: '87vh', overflowY: 'scroll' }}>
          <h3 className="package-title-show" >{locations[0].packageName}</h3>
          <h5 className="daily">Daily itinerary</h5>
          <ShowPackageTile
            key={location._id}
            {...location} />
        </div>
      </div>
    </>



  )

}

export default ShowPage
