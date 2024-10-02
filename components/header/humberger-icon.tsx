import Image from "next/image";
import React from "react";

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => (
  <button id="hamburger">
    <Image
      className={`toggle ${isOpen ? "hidden" : "block dark:bg-white"}`}
      src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
      width={40}
      height={40}
      alt="open menu"
    />
    <Image
      className={`toggle ${isOpen ? "block dark:bg-white" : "hidden"}`}
      src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
      width={40}
      height={40}
      alt="close menu"
      onClick={onClick}
    />
  </button>
);

export default HamburgerIcon;
