"use client";
import React from "react";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div
      className="fixed w-full h-screen flex justify-center z-20"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className="bg-white w-40 h-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Hello!</h2>
      </div>
    </div>
  );
};
export default MobileNav;
