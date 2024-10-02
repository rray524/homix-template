import React from "react";
import Image from "next/image";
import { PropertyDetails } from "../types";
import Link from "next/link";
import { formatPrice } from "@/helpers/helper";

interface PropertyCardProps {
  card: PropertyDetails;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ card }) => {
  return (
    <div className="!w-[100%]">
      <Link href={`/properties/${card._id}`}>
        <div className="bg-white rounded-lg shadow-custom p-4 overflow-hidden">
          <div className="h-[225px] overflow-hidden rounded-t-lg relative">
            <Image
              src={
                card.image_urls.length > 0
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${card.image_urls[0]}`
                  : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
              }
              alt={"image"}
              className="h-[250px] w-full rounded-lg object-cover"
              width={700}
              height={400}
            />
            <span className="absolute top-0 right-0 bg-purple-500 m-2 p-3 text-[10px] font-semibold text-white rounded-xl">
              {card.category}
            </span>
          </div>
          <h2 className="text-2xl text-left my-5 font-bold mb-2 text-primary">
            $ {formatPrice(card.general_details.price)}
          </h2>
          <p className="text-left text-[18px] font-semibold">
            {card.exterior.property_type}
          </p>
          <p className="text-left text-[15px] text-gray-400 font-semibold">
            {card.general_details.address}
          </p>
          <hr className="w-full my-5" />
          <div className="flex flex-wrap justify-between my-5">
            <span className="inline-block py-1 text-[8px] md:text-[12px] lg:text-[14px] text-gray-500 mb-2 text-left">
              <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
                {card.at_a_glance.beds} Beds
              </span>
            </span>
            <span className="inline-block py-1 text-[8px] md:text-[16px] lg:text-[14px] text-gray-500 mb-2 text-left">
              <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
                {card.at_a_glance.baths} Baths
              </span>
            </span>
            <span className="inline-block py-1 text-[8px] md:text-[16px] lg:text-[14px] text-gray-500 mb-2 text-left">
              <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
                {card.square_feet} Square Feet
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
