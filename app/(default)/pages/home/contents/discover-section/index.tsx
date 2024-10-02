import React from "react";
import propeties from "@/public/images/discoverImage.jpg";
import Image from "next/image";
import SectionTitle from "@/components/section-title";
import Button from "@/components/button/common-button";
import HiglightedProperty from "./component";

function DiscoverSection() {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px]">
      <div className="">
        <div className="max-w-[1320px] relative grid grid-cols-1 lg:gap-[50px] content-center sm:text-center lg:grid-cols-2 items-center ">
          <div className="relative">
            <Image
              src={propeties}
              alt="properties"
              className="w-full h-[500px] object-cover object-center rounded-lg"
            />
            <div className="text-left p-3 my-10 lg:my-1 absolute bottom-[-40px] w-full  flex justify-center items-center">
              <div className="w-full max-w-md ">
                <HiglightedProperty
                  name="Seaside Serenity"
                  location="San Francisco"
                  price="$90,000"
                  interval="/per month"
                />
              </div>
            </div>
          </div>

          <div className="text-left p-3 my-10 lg:my-1">
            <SectionTitle
              title="Discover properties that will improve your"
              subtitle="life and that of your family"
              description="Discovering amazing properties at great prices has never been easier. Our platform is designed to connect you with the best real estate opportunities in the market, tailored to fit your needs and budget. Whether you're looking for a cozy apartment in the heart of the city, a spacious family home in a quiet suburb, or a luxurious beachfront villa, we have a diverse selection of properties to suit every lifestyle and preference."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
