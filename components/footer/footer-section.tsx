import Link from "next/link";
import React from "react";

interface FooterSectionProps {
  title: string;
  items: { name: string; link: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="">
    <h1 className="text-[20px] font-semibold my-5 text-blue-600">{title}</h1>

    <ul className="flex flex-col mx-auto gap-2 lg:mx-0">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link} className="text-[15px] py-1">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
