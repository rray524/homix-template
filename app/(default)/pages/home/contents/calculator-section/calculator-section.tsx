import React from "react";
import CalculatorCard from "./calculator-card";
import { calculatorData } from "./data";
import SectionTitle from "@/components/section-title";

const CalculatorSection = () => {
  return (
    <div className="mb-7">
      <SectionTitle
        title="Real Estate Calculators"
        titleClass="text-center w-[80%] mx-auto dark:text-white"
      />
      <div className="p-1 flex flex-wrap items-center justify-center">
        {calculatorData.map((item, index) => (
          <CalculatorCard
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorSection;
