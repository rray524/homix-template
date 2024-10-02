import SectionTitle from "@/components/section-title";
import React from "react";
import { profiles } from "../data/team-data";
import TeamProfileCard from "./team-profile-card";

const TeamSection = () => {
  return (
    <>
      <SectionTitle
        title="Our "
        subtitle="Real Estate Agents"
        titleClass="text-3xl sm:text-[40px] text-black dark:text-gray-900 leading-[52px] text-center mb-20 mt-10"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <TeamProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            title={profile.title}
            description={profile.description}
          />
        ))}
      </div>
    </>
  );
};

export default TeamSection;
