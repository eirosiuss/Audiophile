// "use client";
// import React from "react";
import Image from "next/image";
import Headphone from "../../../../public/product-xx99-mark-one-headphones/mobile/xx99-mark-one-headphones.png";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div
      className="fixed w-full h-screen flex justify-center z-20"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="bg-white w-full mx-6 my-8 h-96 relative flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* div>div>div>img^div>h2+button */}
        <div>
          <div>
            <Image
              width={80}
              height={104}
              src={Headphone}
              alt="xx99 mark one headphones"
            />
            <div className="w-80 bg-grey-light">
              <h2 className="uppercase">Headphones</h2>
              <button>Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
