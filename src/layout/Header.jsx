import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <div className="navbar-logo">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
            alt="Logo"
          />
        </div>

        <div className={`navbar-menu ${isActive ? "active" : ""}`}>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Car Tyres
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                SUV Tyres
              </a>
              <a href="#" className="dropdown-item">
                Sedan Tyres
              </a>
              <a href="#" className="dropdown-item">
                Hatchback Tyres
              </a>
              <a href="#" className="dropdown-item">
                Sedan Tyres
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Bike Tyres
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Sports Bike Tyres
              </a>
              <a href="#" className="dropdown-item">
                Cruiser Tyres
              </a>
              <a href="#" className="dropdown-item">
                Dirt Bike Tyres
              </a>
              <a href="#" className="dropdown-item">
                Cruiser Tyres
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Tyre Pressure
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Car Tyre Pressure
              </a>
              <a href="#" className="dropdown-item">
                Bike Tyre Pressure
              </a>
              <a href="#" className="dropdown-item">
                Bike Tyre Pressure
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Commercial Tyres
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Truck Tyres
              </a>
              <a href="#" className="dropdown-item">
                Bus Tyres
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Accessories
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Seat Covers
              </a>
              <a href="#" className="dropdown-item">
                Floor Mats
              </a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              More
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Seat Covers
              </a>
              <a href="#" className="dropdown-item">
                Floor Mats
              </a>
              <a href="#" className="dropdown-item">
                Air Fresheners
              </a>
            </div>
          </div>

          <div className={`login-section ${isActive ? "active" : ""}`}>
            <FaUser className="user-icon" />
          </div>
        </div>

        <div
          className={`hamburger ${isActive ? "is-active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Header;
