import React from "react";
import Stats from "./contents/stats-component";
import SectionTitle from "@/components/section-title";
import StatsTitle from "./contents/stats-title";
import ClientComponent from "./contents/client-logo";
import ProfileCard from "./contents/profile-card";
import TeamSection from "./contents/team-section";
import { Metadata } from "next";
import FeaturesCard from "./contents/feature-card";

export const metadata: Metadata = {
  title: "About Page | Homix Teamplate",
  description: "Your one way stop to build a beautiful home",
};
const AboutUsPage = () => {
  return (
    <>
      <div className="text-center my-16 md:my-20 px-11">
        <SectionTitle
          title="About "
          subtitle="The Company"
          description="Connecting you with the best real estate opportunities worldwide."
          titleClass="text-3xl sm:text-[40px] text-black dark:text-gray-900 leading-[52px]"
          descriptionClass="font-semibold text-gray-500 text-[16px] sm:text-[18px] my-5 dark:text-gray-300"
        />
      </div>
      <div className="bg-custom-gradient py-12 rounded-lg">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col gap-8 lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <ProfileCard />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <StatsTitle />
            <Stats />
          </div>
        </div>
      </div>
      <ClientComponent />
      <div className="py-10">
        <div className="max-w-[1320px] mx-auto">
          <TeamSection />
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto text-center my-9">
        <div className="p-8 bg-custom-gradient rounded-lg text-white">
          <FeaturesCard />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
