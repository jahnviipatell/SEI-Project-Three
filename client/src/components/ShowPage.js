import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'
import ShowPackageTile from './ShowPackageTile'


const ShowPage = () => {


  const [viewPort, setViewPort] = useState({
    latitude: 64.842827,
    longitude: -18.164241,
    zoom: 5,
    bearing: 0,
    pitch: 0
  })


  const [packages, setPackage] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      setPackage(data)
    }
    getData()
  }, [])

  console.log('packages>>>>>', packages)


  const [days, setDays] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/places')
      setDays(data)
    }
    getData()
  }, [])



  if (!days) return null 
  if (!packages) return null

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
          {packages.map(item => (

            <ShowPackageTile
              key={item._id}
              { ...packages}/>

          )) }

        </div> 

      </div> 
    </>



  )



}

export default ShowPage
