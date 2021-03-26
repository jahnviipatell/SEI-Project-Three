import React from 'react'
import Home from './Home'
import MultipleMarkers from './components/mapbox/MultipleMarkers'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'

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
      </Switch>
    </BrowserRouter>

  )
}




export default App
