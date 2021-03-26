import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
// import MiniTile from './MiniTile'

const MultipleMarkers = () => {
  // console.log('MY TOKEN >>', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

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

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     const { longitude, latitude } = position.coords
  //     setViewPort({ longitude, latitude })
  //   })
  // }, [])

  if (!viewPort) return null

  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height='100%'
        width='100%'
        mapStyle='mapbox://styles/mapbox/streets-v11'
        latitude={viewPort[0].latitude}
        longitude={viewPort[0].longitude}
        zoom={7}
      >
        {viewPort.map(place => {
          return <Marker key={place._id} latitude={place.latitude} longitude={place.longitude}>
            {place.icon}
          </Marker>
        })}
      </ReactMapGL>
    </div>
  )

}


export default MultipleMarkers