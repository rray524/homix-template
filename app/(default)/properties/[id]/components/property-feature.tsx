import React from "react";
import SectionTitle from "@/components/section-title";
import { AtAGlance } from "@/app/(default)/pages/home/contents/property-listing/types";

interface FeaturesProps {
  features: AtAGlance;
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="py-16">
      <SectionTitle title="Features" titleClass="text-2xl font-bold mb-4" />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-secondary px-4 py-4 text-primary flex gap-2 items-center rounded-lg">
          <p className="text-lg font-semibold">Beds</p>
          <p className="text-gray-600">{features.beds}</p>
        </div>
        <div className="bg-secondary px-4 py-4 text-primary flex gap-2 items-center rounded-lg">
          <p className="text-lg font-semibold">Baths</p>
          <p className="text-gray-600">{features.baths}</p>
        </div>
        <div className="bg-secondary px-4 py-4 text-primary flex gap-2 items-center rounded-lg">
          <p className="text-lg font-semibold">Pool</p>
          <p className="text-gray-600">{features.pool}</p>
        </div>
        <div className="bg-secondary px-4 py-4 text-primary flex gap-2 items-center rounded-lg">
          <p className="text-lg font-semibold">Lot Size</p>
          <p className="text-gray-600">{features.lot_size}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
