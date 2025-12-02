import Link from "next/link";
import Image from "next/image";
import Headphone from "@/public/product-xx99-mark-one-headphones/mobile/xx99-mark-one-headphones.svg";
import Earphone from "@/public/product-yx1-earphones/mobile/yx1-earphones.svg";
import Speaker from "@/public/product-zx9-speaker/mobile/zx9-speaker.svg";

export default function CategoryMenu() {
  return (
    <ul
      className="bg-white w-full px-6 flex flex-col justify-center items-center gap-4 py-8 rounded-b-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <li className="w-full">
        <div
          className="mx-auto relative before:content-[''] before:absolute before:-bottom-2.5 
            before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-4 
            before:bg-black/50 before:blur-lg"
        >
          <Image
            className="mx-auto"
            src={Headphone}
            alt="xx99 mark one headphones"
          />
        </div>
        <div className="w-full bg-grey-light rounded-lg flex flex-col justify-center items-center pt-20 -mt-12">
          <p className="uppercase text-sm font-bold ">Headphones</p>
          <Link
            className="py-5 px-20 flex gap-3 uppercase font-bold text-xs text-black/50"
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
        <div
          className="mx-auto relative before:content-[''] before:absolute before:-bottom-2.5 
            before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-4 
            before:bg-black/50 before:blur-lg"
        >
          <Image className="mx-auto" src={Speaker} alt="zx9 speaker" />
        </div>
        <div className="w-full bg-grey-light rounded-lg flex flex-col justify-center items-center pt-20 -mt-12">
          <p className="uppercase text-sm font-bold">Speakers</p>
          <Link
            className="py-5 px-20 flex gap-3 uppercase font-bold text-xs text-black/50"
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
        <div
          className="mx-auto relative before:content-[''] before:absolute before:-bottom-2.5 
            before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-4 
            before:bg-black/50 before:blur-lg"
        >
          <Image className="mx-auto" src={Earphone} alt="yx1 earphones" />
        </div>
        <div className="w-full bg-grey-light rounded-lg flex flex-col justify-center items-center pt-20 -mt-12">
          <p className="uppercase text-sm font-bold ">Earphones</p>
          <Link
            className="py-5 px-20 flex gap-3 uppercase font-bold text-xs text-black/50"
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
