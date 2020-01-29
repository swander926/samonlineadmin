import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


const HeaderComponent = () => {
  return (
    
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
              <Link className="navLink" to="/VeteransPage">
                Veterans
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
          </ul>
        </nav>
      </header>
  );
}

export default HeaderComponent;
