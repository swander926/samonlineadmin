import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AppointmentPage from './pages/AppointmentPage'
import ResumePage from './pages/ResumePage'
import VehiclesPage from './pages/VehiclesPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import NotFound from './pages/NotFound'
import AnotherTestPage from './pages/AnotherTestPage'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul className="navBar">
            <li className="navListItem">
              <Link className="navLink" to="/">
                Home
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/AppointmentPage">
                Appointments
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/ResumePage">
                Resumes
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/VehiclesPage">
                Vehicles
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/TestPage">
                TEST PAGE
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navLink" to="/AnotherTestPage">
                ANOTHER TEST PAGE
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/AppointmentPage"
          component={AppointmentPage}
        ></Route>
        <Route exact path="/ResumePage" component={ResumePage}></Route>
        <Route exact path="/VehiclesPage" component={VehiclesPage}></Route>
        <Route exact path="/TestPage" component={TestPage}></Route>
        <Route
          exact
          path="/AnotherTestPage"
          component={AnotherTestPage}
        ></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
