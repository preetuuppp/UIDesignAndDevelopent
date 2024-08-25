import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";

import LogOutComponent from "../auth0Component/LogOutComponent";
import SliderComponent from "../components/SliderComponent";
import CardSlider from "../components/CardSlider";
import { CardSliderData, DealsCard } from "../AllData/Data";

const Navbar = () => {
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
            <LogOutComponent />
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

      <div className="card-slider">
        <div className="flex justify-between flex-container">
          <div className="address-section w-[500px] address-section">
            <h1 className="m-4 p-7 text-lg flex justify-between company-name">
              SHREE HEMKUNT TYRES AND SERVICES
              <h5 className="text-green-500 verify-text">verified</h5>
            </h1>
            <p className="flex gap-3 rating-star">
              <span>4.9</span>
              <span className="flex">
                <CiStar className="star-icon" />
                <CiStar className="star-icon" />

                <CiStar className="star-icon" />

                <CiStar className="star-icon" />

                <CiStar className="star-icon" />
              </span>
            </p>

            <p className="flex m-4 justify-between">
              <CiLocationOn className="add-time-icon" /> PLOT NUMBER-09 GROUND
              FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad,
              Uttar Pradesh, 201014{" "}
            </p>
            <p className="flex m-4">
              <IoMdTime className="time-icon" />
              Open - Monday to Sunday - 10:00AM to 8:00PM
            </p>
          </div>
          <div className="card-section">
            <SliderComponent />
          </div>
        </div>
        <div>
          <CardSlider data={CardSliderData} secondCard={false} />
        </div>
      </div>
      <div className="second-card">
        <CardSlider data={DealsCard} secondCard={true} />
      </div>
    </>
  );
};

export default Navbar;
