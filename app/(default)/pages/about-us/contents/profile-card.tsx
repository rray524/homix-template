import Image from "next/image";
import React from "react";
import about_one from "@/public/images/about-1.png";
import about_two from "@/public/images/about-2.webp";

const ProfileCard: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src={about_one}
        alt="Profile"
        className="rounded-lg md:h-[500px] object-cover"
      />
      <div className="absolute bottom-4 left-4 flex items-center bg-white p-4 rounded-lg shadow-lg">
        <Image
          src={about_two}
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">Kristin Watson</p>
          <p className="text-gray-500">Load officer at Homix</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
