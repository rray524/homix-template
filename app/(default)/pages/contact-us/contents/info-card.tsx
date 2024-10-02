import React from "react";

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-custom hover:shadow-hover-shadow">
      <h3 className="text-purple-600">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;
