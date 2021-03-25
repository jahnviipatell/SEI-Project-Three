import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const SimpleMap = () => {
  // console.log('MY TOKEN >>', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

  const [viewPort, setViewPort] = useState({
    latitude: 64.963051,
    longtitude: -19.020836,
    zoom: 4
  })
  console.log(setViewPort)

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
        latitude={viewPort.latitude}
        longitude={viewPort.longitude}
        zoom={viewPort.zoom}
      />
    </div>
  )

}


export default SimpleMap