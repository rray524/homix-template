import SectionTitle from "@/components/section-title";
import React from "react";

interface DescriptionProps {
  description: string;
}

const PropertyDescription: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="mb-8">
      <SectionTitle title="Description" titleClass="text-2xl font-bold mb-4" />
      <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default PropertyDescription;
