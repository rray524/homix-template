import React from "react";
import image from "@/public/images/bestplace.webp";
import imageCarton from "@/public/images/carton icon.webp";
import SectionTitle from "@/components/section-title";
import Button from "@/components/button/common-button";
import Image from "next/image";
import CongratulationCard from "./component";
import { handleScroll } from "@/helpers/helper";

function CtaSection({
  propertyListingRef,
}: {
  propertyListingRef: React.RefObject<HTMLDivElement>;
}) {
  const scrollToProperties = () => {
    handleScroll(propertyListingRef);
  };
  return (
    <div className="bg-primary dark:bg-gray-700 p-4 lg:p-10 my-10 pb-16">
      <div className="max-w-[1320px] mx-auto my-10">
        <div className="">
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5 pb-14">
            <div className="text-left w-full sm:w-auto my-5 lg:my-1 flex flex-col items-center sm:items-start justify-center p-5 relative">
              <SectionTitle
                title="The best place to discover amazing properties at great prices."
                subtitle="Get in touch today"
                description="Our team of experienced real estate professionals is dedicated to helping you find the perfect property. We understand that buying a home is one of the most significant investments you'll make, and we're here to guide you every step of the way. From initial consultation to closing the deal, we ensure a seamless and stress-free experience."
                titleClass="text-black dark:!text-gray-900"
                descriptionClass="font-semibold text-gray-500 text-[16px] sm:text-[18px] my-5"
              />
              <div className="flex justify-center mt-24 xl:absolute xl:bottom-[0.5rem]">
                <Button
                  className=" !bg-black dark:!bg-purple-500 hover:dark:!bg-black"
                  onClick={scrollToProperties}
                >
                  Find apartments
                </Button>
              </div>
            </div>

            <div className="relative w-full sm:w-auto">
              <Image
                src={image}
                alt="properties"
                className="w-full h-full object-cover rounded-lg"
              />

              <CongratulationCard
                imageSrc={imageCarton}
                imageAlt="Congratulatory image"
                title="Congratulations!"
                message="You have rented an apartment. Thank you for choosing us."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
