"use client";
import React, { useEffect, useState } from "react";
import HeaderImage from "@/public/images/header image.svg";
import Image from "next/image";
import HamburgerIcon from "../header/humberger-icon";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import ToggleButton from "../button/toggle-button";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
    localStorage.setItem("isChecked", JSON.stringify(!isChecked));
  };

  useEffect(() => {
    const storedIsChecked = localStorage.getItem("isChecked");
    if (storedIsChecked !== null) {
      setIsChecked(JSON.parse(storedIsChecked));
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    hamburger?.addEventListener("click", toggleMenu);

    return () => {
      hamburger?.removeEventListener("click", toggleMenu);
    };
  }, []);
  return (
    <header
      className={`px-4 lg:px-0 ${
        isSticky
          ? "fixed top-0 bg-white shadow-lg z-50 w-full dark:bg-gray-700 "
          : ""
      }`}
    >
      <nav className="flex flex-wrap lg:flex-row gap-4 w-full mx-auto !items-center justify-between my-5 lg:px-20">
        <Link href="/">
          <Image src={HeaderImage} className="h-[40px]" alt="header-image" />
        </Link>

        <div
          className={`toggle w-full lg:w-auto lg:flex lg:items-center gap-4 lg:gap-12 text-bold mt-5 md:mt-0 md:border-none order-2 lg:order-1 ${
            isMenuOpen
              ? "flex flex-col lg:flex-row justify-center items-center animate-slideDown"
              : "hidden lg:flex"
          } ${!isMenuOpen && "animate-slideUp lg:animate-none"}`}
        >
          <Link
            href="/"
            className="text-md font-bold dark:text-gray-100"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/pages/about-us"
            className="text-md font-bold dark:text-gray-100"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/pages/contact-us"
            className="text-md font-bold dark:text-gray-100"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:gap-2 order-1 lg:order-2">
          <div className="flex gap-0 lg:gap-4 w-[4rem] justify-center lg:justify-between items-center my-0 lg:my-4">
            <ToggleButton isChecked={isChecked} handleChange={handleChange} />
          </div>
          <div className=" block lg:hidden">
            <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
