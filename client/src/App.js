import React from 'react'
import Home from './Home'
import MultipleMarkers from './components/mapbox/MultipleMarkers'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'
import AllPackages from './components/AllPackages'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MyNavbar className="nav-home" />
          <Home />
        </Route>
        <Route path="/map">
          <MultipleMarkers />
        </Route>
        <Route path="/packages">
          <AllPackages />
        </Route>
        <Route path="/packages/:id">

        </Route>
      </Switch>
    </BrowserRouter>

  )
}




export default App
