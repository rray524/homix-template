import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <p className="toggle lg:flex w-full lg:w-auto px-8 py-4 sm:text-center text-center bg-black text-[18px] rounded-lg text-white font-semibold border items-center justify-center hidden hover:bg-purple-500 transition duration-300">
      {children}
    </p>
  </Link>
);

export default ButtonLink;
