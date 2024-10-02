import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-black transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
