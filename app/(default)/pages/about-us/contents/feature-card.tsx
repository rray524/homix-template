import React from "react";
import FeatureCard from "./feature-card.component";
import { features } from "../data/feature-data";
import SectionTitle from "@/components/section-title";

const FeaturesCard: React.FC = () => {
  return (
    <div className="py-10">
      <SectionTitle
        title="The Homix product  methodology"
        description=""
        titleClass="text-3xl sm:text-[40px] text-black dark:text-gray-900 leading-[52px] text-white mb-10"
        descriptionClass="font-semibold text-gray-500 text-[16px] sm:text-[18px] my-5 text-gray-100"
      />
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
