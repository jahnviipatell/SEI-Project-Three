import React from 'react'
import Home from './Home'
import MultipleMarkers from './components/mapbox/MultipleMarkers'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'
import AllPackages from './components/AllPackages'
import MiniTile from './components/mapbox/MiniTile'

const App = () => {

  return (
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/map">
          <MultipleMarkers />
        </Route>
        <Route path="/packages">
          <AllPackages />
        </Route>
        <Route path="/minitile">
          <MiniTile />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}




export default App
