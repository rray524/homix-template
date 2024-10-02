import { formatPrice } from "@/helpers/helper";
import React from "react";
import PropertyType from "./property-type-component";

interface PropertyHeaderProps {
  address: string;
  title: string;
  price: string;
  category: string;
  status: string;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  address,
  title,
  price,
  category,
  status,
}) => {
  return (
    <>
      <PropertyType category={category} status={status} />
      <div className="flex justify-between flex-col md:flex-row gap-4 items-center mb-8">
        <div>
          <p className="text-gray-500 mb-8">{address}</p>
          <h1 className="text-6xl font-bold dark:text-white">{title}</h1>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-4 rounded-lg">
          <span className="text-3xl font-bold">${formatPrice(price)}</span>
        </div>
      </div>
    </>
  );
};

export default PropertyHeader;
