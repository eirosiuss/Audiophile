import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Headphone from "@/public/product-xx99-mark-one-headphones/mobile/xx99-mark-one-headphones.svg";
import Earphone from "@/public/product-yx1-earphones/mobile/yx1-earphones.svg";
import Speaker from "@/public/product-zx9-speaker/mobile/zx9-speaker.svg";

type CategoryItem = {
  title: string;
  image: StaticImageData;
  href: string;
  alt: string;
};

type CategoryMenuProps = {
  onClose?: () => void;
  className?: string;
};

const items: CategoryItem[] = [
  {
    title: "Headphones",
    image: Headphone,
    href: "/headphones",
    alt: "xx99 mark one headphones",
  },
  {
    title: "Speakers",
    image: Speaker,
    href: "/speakers",
    alt: "zx9 speaker",
  },
  {
    title: "Earphones",
    image: Earphone,
    href: "/earphones",
    alt: "yx1 earphones",
  },
];

export default function CategoriesLinks({
  onClose,
  className,
}: CategoryMenuProps) {
  return (
    <ul
      className={clsx(
        "flex flex-col items-center justify-center gap-4 bg-white md:flex-row md:gap-2.5",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.title} className="w-full">
          <div className="relative mx-auto before:absolute before:-bottom-2.5 before:left-1/2 before:h-4 before:w-24 before:-translate-x-1/2 before:bg-black/50 before:blur-lg before:content-['']">
            <Image className="mx-auto" src={item.image} alt={item.alt} />
          </div>

          <div className="bg-grey-light -mt-12 flex w-full flex-col items-center justify-center rounded-lg pt-20 lg:pt-36.5">
            <p className="text-[0.938rem] font-bold uppercase">{item.title}</p>
            <Link
              href={item.href}
              onClick={onClose}
              className="flex gap-3 px-20 py-5 text-[13px] font-bold text-black/50 uppercase hover:text-[#D87D4A]"
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
      ))}
    </ul>
  );
}
