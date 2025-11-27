// "use client";
import Link from "next/link";
import Image from "next/image";
import Headphone from "@/public/product-xx99-mark-one-headphones/mobile/xx99-mark-one-headphones.svg";

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <nav
      className="fixed w-full h-screen flex justify-center z-20"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <ul
        className="bg-white w-full mx-6 my-8 h-96 relative flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <li>
          <Image
            width={80}
            height={104}
            src={Headphone}
            alt="xx99 mark one headphones"
          />
          <div className="w-80 bg-grey-light">
            <p className="uppercase">Headphones</p>
            <Link href="/home/headphones">Shop</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;
