import Image from "next/image";
import React, { useState, useEffect } from "react";

// Interface for property details (replace with your actual property data structure)
interface PropertyDetails {
  id: number;
  image: string;
  title: string;
  description: string;
  location: string;
  building: string;
  apartments: string;
}

function PropertyCard({ card }: { card: PropertyDetails }) {
  return (
    <div key={card.id} className="p-4 !w-[100%]">
      <div className="bg-white rounded-lg shadow-custom p-4 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          className="h-[250px] w-full rounded-lg object-cover"
        />
        <h2 className="text-xl text-left my-5 font-bold mb-2">{card.title}</h2>
        <p className="text-left text-[18px] font-semibold">
          {card.description}
        </p>
        <p className="text-left text-[15px] text-gray-400 font-semibold">
          {card.location}
        </p>
        <hr className="w-full my-5" />
        <div className="flex flex-wrap justify-between my-5">
          <span className="inline-block py-1 text-[8px] md:text-[12px] lg:text-[14px] text-gray-500 mb-2 text-left">
            <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
              {card.building}
            </span>
          </span>
          <span className="inline-block py-1 text-[8px] md:text-[16px] lg:text-[14px] text-gray-500 mb-2 text-left">
            <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
              {card.apartments}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export const PreloadingProperty = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="bg-gray-200 h-48"></div>
      <div className="flex-1 space-y-2">
        <div className="h-16 bg-gray-200 w-full"></div>
        <div className="space-x-2 flex">
          <div className="h-8 bg-gray-200 w-full"></div>
          <div className="h-8 bg-gray-200 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PreloadingProperty;
