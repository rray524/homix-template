import React from "react";

interface HiglightedPropertyProps {
  name: string;
  location: string;
  price: string;
  interval: string;
}

const HiglightedProperty: React.FC<HiglightedPropertyProps> = ({
  name,
  location,
  price,
  interval,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mx-auto">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500">{location}</p>
        </div>
        <div className="text-right">
          <h3 className="text-purple-500 font-bold text-2xl">{price}</h3>
          <p className="text-gray-500">{interval}</p>
        </div>
      </div>
    </div>
  );
};

export default HiglightedProperty;
