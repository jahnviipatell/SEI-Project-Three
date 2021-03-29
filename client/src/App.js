import React from 'react'
import Home from './Home'
import MultipleMarkers from './components/mapbox/MultipleMarkers'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MyNavbar from './Navbar'
import AllPackages from './components/AllPackages'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ShowPage from './components/ShowPage'

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MyNavbar className="nav-home" />
          <Home />
        </Route>
        <Route path="/map">
          <MyNavbar className="nav-grey" />
          <MultipleMarkers />
        </Route>
        <Route path="/packages/:id">
          <ShowPage />
        </Route>
        <Route path="/packages">
          <AllPackages />
        </Route>
        <Route path="/register">
          <MyNavbar className="nav-home" />
          <Register />
        </Route>
        <Route path="/login">
          <MyNavbar className="nav-home" />
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}




export default App
