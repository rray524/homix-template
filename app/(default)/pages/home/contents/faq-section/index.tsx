import { frequentlayAskQuestion } from "@/app/(default)/properties/[id]/data/faq-data";
import Button from "@/components/button/common-button";
import SectionTitle from "@/components/section-title";
import { handleScroll } from "@/helpers/helper";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FaqSection = ({
  propertyListingRef,
}: {
  propertyListingRef: React.RefObject<HTMLDivElement>;
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFunction = (index: number) => {
    setActiveId((prevIndex) => (prevIndex === index ? null : index));
  };
  const scrollToProperties = () => {
    handleScroll(propertyListingRef);
  };
  return (
    <div className="max-w-[1320px] mx-auto my-10 p-4">
      <div className="p-2 lg:p-8 rounded-lg">
        <SectionTitle
          title="Frequently asked questions"
          subtitle=""
          description=""
          titleClass="text-center"
          descriptionClass="text-center"
        />
        <div className="w-full lg:py-10 flex justify-center">
          <div className="w-full lg:w-[1320px]">
            {frequentlayAskQuestion.map((item, i) => (
              <div
                key={i}
                className="border-b last:border-b-0 shadow-custom p-4 my-2 rounded-lg"
              >
                <div
                  className={`px-5 py-3 flex items-center justify-between cursor-pointer ${
                    activeId === i ? "bg-gray-100 rounded-md" : ""
                  }`}
                  onClick={() => toggleFunction(i)}
                >
                  <p
                    className={`flex-1 text-left text-[18px] font-semibold ${
                      activeId === i ? "text-purple-500" : "dark:text-gray-300"
                    }`}
                  >
                    {item.title}
                  </p>
                  <span className="bg-gray-100 w-[40px] h-[40px] flex items-center font-bold justify-center text-blue-600 rounded-full">
                    {activeId === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeId === i
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 py-4">
                    <p className="text-gray-700 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-1">
        <Button
          className="!bg-purple-500 hover:!bg-black"
          onClick={scrollToProperties}
        >
          Explore All Listings
        </Button>
      </div>
    </div>
  );
};

export default FaqSection;
