import React from "react";

interface PropertyInfoProps {
  beds: number;
  baths: number;
  sqft: number;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ beds, baths, sqft }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 space-x-4 mb-8">
      <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
        <span className="font-semibold">{beds} beds</span>
      </div>
      <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
        <span className="font-semibold">{baths} bathrooms</span>
      </div>
      <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md">
        <span className="font-semibold">{sqft} m²</span>
      </div>
    </div>
  );
};

export default PropertyInfo;
