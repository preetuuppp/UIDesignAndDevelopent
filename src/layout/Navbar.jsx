import React from "react";
import { FaUser } from "react-icons/fa";
import LogOutComponent from "../auth0Component/LogOutComponent";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="Logo"
            className="navbar-logo"
          />
        </a>

        <div className="navbar-nav mx-auto">
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              Car Tyres
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                SUV Tyres
              </a>
              <a className="dropdown-item" href="#">
                Sedan Tyres
              </a>
              <a className="dropdown-item" href="#">
                Hatchback Tyres
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              Bike Tyres
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Sports Bike Tyres
              </a>
              <a className="dropdown-item" href="#">
                Cruiser Tyres
              </a>
              <a className="dropdown-item" href="#">
                Dirt Bike Tyres
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              Tyre Pressure
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Car Tyre Pressure
              </a>
              <a className="dropdown-item" href="#">
                Bike Tyre Pressure
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              Commercial Tyres
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Truck Tyres
              </a>
              <a className="dropdown-item" href="#">
                Bus Tyres
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              Accessories
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Seat Covers
              </a>
              <a className="dropdown-item" href="#">
                Floor Mats
              </a>
              <a className="dropdown-item" href="#">
                Air Fresheners
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link" href="#">
              More
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Seat Covers
              </a>
              <a className="dropdown-item" href="#">
                Floor Mats
              </a>
              <a className="dropdown-item" href="#">
                Air Fresheners
              </a>
            </div>
          </div>
        </div>

        <div className="login-section">
          <FaUser className="user-icon" />
          {/* <button >Login</button> */}
          <LogOutComponent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
