import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  titleClass?: string;
  descriptionClass?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div>
      <h2
        className={`text-2xl sm:text-[2.5rem] leading-snug font-bold ${titleClass} dark:text-white`}
      >
        {title}
        <span className="text-primary"> {subtitle}</span>
      </h2>
      {description && (
        <p
          className={`font-semibold text-gray-500 text-[18px] my-2 ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
