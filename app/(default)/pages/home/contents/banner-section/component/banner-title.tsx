import React from "react";

interface BannerTitleProps {
  title: string;
  subtitle: string;
  description: string;
}

const BannerTitle: React.FC<BannerTitleProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="text-center">
      <h1 className="md:text-[60px] text-[37px] font-bold">{title}</h1>
      <h3 className="md:text-[60px] text-[37px] text-primary font-bold">
        {subtitle}
      </h3>
      <br />
      <p className="text-[18px] md:text-[21px] font-semibold text-gray-600 w-full lg:w-[40%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default BannerTitle;
