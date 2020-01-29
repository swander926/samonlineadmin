import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AppointmentPage from './pages/AppointmentPage'
import ResumePage from './pages/ResumePage'
import VeteransPage from './pages/VeteransPage'
import VehiclesPage from './pages/VehiclesPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import NotFound from './pages/NotFound'
import AccessPage from './pages/AccessPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/AppointmentPage"
          component={AppointmentPage}
        ></Route>
        <Route exact path="/ResumePage" component={ResumePage}></Route>
        <Route exact path="/VeteransPage" component={VeteransPage}></Route>
        <Route exact path="/VehiclesPage" component={VehiclesPage}></Route>
        <Route exact path="/TestPage" component={TestPage}></Route>
        <Route exact path="/AccessPage" component={AccessPage}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
