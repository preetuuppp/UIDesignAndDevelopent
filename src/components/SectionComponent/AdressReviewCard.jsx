import React from "react";
import { CardSliderData } from "../../AllData/Data";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import SliderComponent from "../CardComponent/SliderComponent";
import CardSlider from "../CardComponent/CardSlider";

const AdressReview = () => {
  return (
    <>
      <div className="card-slider">
        <div className="flex justify-between flex-container">
          <div className="address-section w-[500px] address-section">
            <h1 className="m-2 p-6 text-lg flex justify-between company-name">
              SHREE HEMKUNT TYRES AND SERVICES
              <h5 className="text-green-500 verify-text">verified</h5>
            </h1>
            <div className="flex items-center mt-2 rating-star">
              <div
                className="px-1 rounded"
                style={{
                  backgroundColor: "rgb(76,167,44)",
                }}
              >
                <span className="text-white text-sm font-semibold">★ 4.9</span>
              </div>
            </div>
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
    </>
  );
};

export default AdressReview;
