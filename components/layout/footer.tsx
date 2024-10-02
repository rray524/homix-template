import React from "react";
import footerImage from "@/public/images/header image.svg";
import FooterSection from "../footer/footer-section";
import SubscribeForm from "../footer/subscribe-part";
import ContactInfo from "../footer/contact-menu";
import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Features",
    items: [
      { name: "Home ", link: "/" },
      { name: "About", link: "/pages/about-us" },
    ],
  },
  {
    title: "Utility pages",
    items: [{ name: "Contact Us", link: "/pages/contact-us" }],
  },
];

const Footer: React.FC = () => (
  <>
    <div>
      <div className="bg-[#f1f0fe] p-5 rounded-xl max-w-[1320px] flex flex-col mx-auto sm:flex-row">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center lg:text-left my-10 px-5 gap-6">
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
          <div className="">
            <SubscribeForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between my-10">
        <Link href="/">
          <Image
            src={footerImage}
            alt="footerImage"
            className=" mb-4 lg:mb-0"
          />
        </Link>
        <p className="text-[16px] p-5 dark:text-gray-400">
          Copyright © 2024 Homix Template | Powered by Simbanic
        </p>
      </div>
    </div>
  </>
);

export default Footer;
