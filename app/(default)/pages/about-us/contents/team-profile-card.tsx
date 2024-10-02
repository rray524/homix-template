import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

interface ProfileCardProps {
  image: StaticImageData;
  name: string;
  title: string;
  description: string;
}

const TeamProfileCard: React.FC<ProfileCardProps> = ({
  image,
  name,
  title,
  description,
}) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-custom hover:shadow-hover-shadow text-center dark:bg-gray-300">
        <Image
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={image}
          alt={name}
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-purple-600">{title}</p>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex justify-center mt-4 space-x-4 text-gray-500">
          <FaInstagram className="h-6 w-6" />
          <FaFacebook className="h-6 w-6" />
          <FaTwitter className="h-6 w-6" />
        </div>
      </div>
    </>
  );
};

export default TeamProfileCard;
