import React from "react";

const Stats: React.FC = () => {
  const stats = [
    { value: "10+", label: "Years in business" },
    { value: "195", label: "Countries" },
    { value: "35+", label: "Integration partners" },
    { value: "1M+", label: "Users" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-8 text-white">
      {stats.map((stat, index) => (
        <div key={index}>
          <p className="text-3xl sm:text-5xl font-bold">{stat.value}</p>
          <p className="text-lg sm:text-xl">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
