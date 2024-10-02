import React from "react";
import Image, { StaticImageData } from "next/image";

interface CongratulationCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  message: string;
}

const CongratulationCard: React.FC<CongratulationCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  message,
}) => {
  return (
    <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg w-full sm:w-[400px]">
      <div className="flex sm:flex-row justify-between items-center sm:items-start">
        <div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="h-[150px] w-[150px] object-cover"
          />
        </div>
        <div className="my-5 text-center sm:text-left sm:ml-5">
          <h1 className="text-[20px] sm:text-[25px] text-primary font-bold">
            {title}
          </h1>
          <p className="text-[14px] sm:text-[18px] text-gray-500 font-semibold my-2">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongratulationCard;
