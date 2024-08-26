import React from "react";
import { CardSliderData } from "../../AllData/Data";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import SliderComponent from "../CardComponent/SliderComponent";
import CardSlider from "../CardComponent/CardSlider";

const AdressReview = () => {
  return (
    <>
      <div className="card-slider py-4">
        <div className="flex justify-between flex-container">
          <div className="address-section w-[500px] address-section">
            <h1 className="m-2 ml-2 px-6 text-lg flex justify-between company-name">
              SHREE HEMKUNT TYRES AND SERVICES
              <h5 className="text-green-500 verify-text">verified</h5>
            </h1>

            <div className="flex gap-3 py-3 ml-7 px-2">
              <div
                className="px-1 rounded"
                style={{
                  backgroundColor: "rgb(76,167,44)",
                }}
              >
                <span className="text-white p-1 text-center flex justify-center">
                  4.9
                </span>
              </div>
              <div className="mt-1">
                <span className="gap-4">★ ★ ★ ★ ★ 2278 Reviews</span>
              </div>
              <button className="px-2 py-1 text-gray-500 font-semibold border-1 rounded-sm border-gray-400 ">
                Rate
              </button>
            </div>

            <p className="flex  ml-7 mb-2 justify-between">
              <CiLocationOn className="add-time-icon" /> PLOT NUMBER-09 GROUND
              FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad,
              Uttar Pradesh, 201014{" "}
            </p>
            <p className="flex ml-[30px]">
              <IoMdTime className="time-icon" />
              Open - Monday to Sunday - 10:00AM to 8:00PM
            </p>

            <button className="border-2 border-red-600  font-bold rounded-md w-[200px] text-red-600 py-2 mt-4 ml-[30px]">
              Get Direction
            </button>
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
