import Link from "next/link";
import Image from "next/image";
import Headphone from "@/public/product-xx99-mark-one-headphones/mobile/xx99-mark-one-headphones.svg";
import Earphone from "@/public/product-yx1-earphones/mobile/yx1-earphones.svg";
import Speaker from "@/public/product-zx9-speaker/mobile/zx9-speaker.svg";

type CategoryMenuProps = {
  onClose?: () => void;
};

export default function CategoryMenu({ onClose }: CategoryMenuProps) {
  return (
    <ul className="flex w-full flex-col items-center justify-center gap-4 bg-white px-6 py-8 md:flex-row md:gap-2.5 md:px-10 md:py-15">
      <li className="w-full">
        <div className="relative mx-auto before:absolute before:-bottom-2.5 before:left-1/2 before:h-4 before:w-24 before:-translate-x-1/2 before:bg-black/50 before:blur-lg before:content-['']">
          <Image
            className="mx-auto"
            src={Headphone}
            alt="xx99 mark one headphones"
          />
        </div>
        <div className="bg-grey-light -mt-12 flex w-full flex-col items-center justify-center rounded-lg pt-20">
          <p className="text-[0.938rem] font-bold uppercase">Headphones</p>
          <Link onClick={onClose}
            className="flex gap-3 px-20 py-5 text-[13px] font-bold text-black/50 uppercase hover:text-[#D87D4A]"
            href="/home/headphones"
          >
            Shop
            <span>
              <svg
                className="inline-block"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707031 0.707031L5.70703 5.70703L0.707031 10.707"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </div>
      </li>
      <li className="w-full">
        <div className="relative mx-auto before:absolute before:-bottom-2.5 before:left-1/2 before:h-4 before:w-24 before:-translate-x-1/2 before:bg-black/50 before:blur-lg before:content-['']">
          <Image className="mx-auto" src={Speaker} alt="zx9 speaker" />
        </div>
        <div className="bg-grey-light -mt-12 flex w-full flex-col items-center justify-center rounded-lg pt-20">
          <p className="text-[0.938rem] font-bold uppercase">Speakers</p>
          <Link onClick={onClose}
            className="flex gap-3 px-20 py-5 text-[13px] font-bold text-black/50 uppercase hover:text-[#D87D4A]"
            href="/home/speakers"
          >
            Shop
            <span>
              <svg
                className="inline-block"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707031 0.707031L5.70703 5.70703L0.707031 10.707"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </div>
      </li>
      <li className="w-full">
        <div className="relative mx-auto before:absolute before:-bottom-2.5 before:left-1/2 before:h-4 before:w-24 before:-translate-x-1/2 before:bg-black/50 before:blur-lg before:content-['']">
          <Image className="mx-auto" src={Earphone} alt="yx1 earphones" />
        </div>
        <div className="bg-grey-light -mt-12 flex w-full flex-col items-center justify-center rounded-lg pt-20">
          <p className="text-[0.938rem] font-bold uppercase">Earphones</p>
          <Link onClick={onClose}
            className="flex gap-3 px-20 py-5 text-[13px] font-bold text-black/50 uppercase hover:text-[#D87D4A]"
            href="/home/earphones"
          >
            Shop
            <span>
              <svg
                className="inline-block"
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707031 0.707031L5.70703 5.70703L0.707031 10.707"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </div>
      </li>
    </ul>
  );
}
