import React from "react";

const ServiceCard = ({ title, imageSrc, buttonText }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
      <img
        src={imageSrc}
        alt={title}
        className="mb-4 w-24 h-24 object-contain"
      />
      <h3 className="text-lg font-medium text-center">{title}</h3>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
