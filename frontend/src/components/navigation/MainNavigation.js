import React from "react";
// Navlink special link which catches link and not reloads page
// it manually changes the url and renders the component w/o reloading the single page app
import { NavLink } from 'react-router-dom';
// webpack injects this css to our page
import './MainNavigation.css';

const mainNavigation = (props) => (
  <header className="main-navigation">
      <div className="main-navigation__logo">
        <h1>Event Booking!</h1>
      </div>
      <nav className="main-navigation__items">
          <ul>
              {/* due to navlinks there is no reload */}
              <li><NavLink to="/events">Events</NavLink></li>
              <li><NavLink to="/bookings">Bookings</NavLink></li>
              <li><NavLink to="/auth">Authenticate</NavLink></li>
          </ul>
      </nav>
  </header>
);

export default mainNavigation;