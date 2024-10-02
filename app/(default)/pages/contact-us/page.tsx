import SectionTitle from "@/components/section-title";
import React from "react";
import InfoCard from "./contents/info-card";
import ContactForm from "./contents/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Homix Teamplate",
  description: "Your one way stop to build a beautiful home",
};
const ContactPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-[100px] flex gap-2 md:flex-row flex-col px-3">
      <div className="p-8 w-full md:w-1/2">
        <SectionTitle
          title=" Get in touch with"
          subtitle="us and lets talk"
          description="Reach out to us today and let's discuss your real estate needs. Our team is here to provide expert advice and help you find your perfect property. Contact us now!"
          titleClass="text-3xl sm:text-[40px] text-black dark:text-gray-900 leading-[52px]"
          descriptionClass="font-semibold text-gray-500 text-[16px] sm:text-[18px] my-5 dark:text-gray-400"
        />

        <div className="mt-8 grid sm:grid-cols-1  md:grid-cols-2 gap-4">
          <InfoCard title="Email" content="hello@homix.com" />
          <InfoCard title="Phone" content="(120) 450 - 6589" />
          <InfoCard title="Location #1" content="San Francisco, CA" />
          <InfoCard title="Location #2" content="San Francisco, CA" />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
