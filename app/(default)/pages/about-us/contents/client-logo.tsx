import Image from "next/image";
import React from "react";
import client_one from "@/public/images/client-1.webp";
import client_two from "@/public/images/client-2.webp";
import client_three from "@/public/images/client-3.webp";
import client_four from "@/public/images/client-4.webp";
import client_five from "@/public/images/client-5.webp";

const logos = [
  { src: client_one, alt: "HubSpot" },
  { src: client_two },
  { src: client_three, alt: "Framer" },
  { src: client_four, alt: "GitHub" },
  { src: client_five, alt: "Gong" },
];

const ClientComponent: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center justify-items-center pt-11">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo.src}
              className="object-cover w-[130px] md:w-auto h-auto  dark:bg-white dark:opacity-90 dark:p-4 dark:rounded-lg"
              width={200}
              height={60}
              alt={"logo"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComponent;
