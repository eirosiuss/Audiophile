import Button from "./buttons/button";
import clsx from "clsx";
import Image from "next/image";

type ProductHeadingCategoryPageProps = {
  name: string;
  description: string;
  isNew?: boolean;
  reverse?: boolean;
  src: string;
};

export default function ProductHeadingCategoryPage({
  name,
  description,
  isNew,
  reverse = false,
  src,
}: ProductHeadingCategoryPageProps) {
  return (
    <div
      className={clsx(
        "flex max-w-277.5 flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-center lg:gap-31.25 xl:mx-auto xl:px-0",
        reverse && "lg:flex-row-reverse",
      )}
    >
      <div className="relative aspect-327/352 w-full flex-1 overflow-hidden rounded-lg md:aspect-689/352 lg:aspect-540/560">
        <Image src={src} alt={name} fill className="object-cover" />
      </div>

      <div className="flex-1 space-y-6 text-center text-balance md:mx-auto md:max-w-143 lg:max-w-none lg:space-y-8 lg:text-left">
        {isNew && (
          <p className="text-orange text-sm tracking-[10px] uppercase">
            New Product
          </p>
        )}
        <h2 className="text-[1.75rem] font-bold text-black uppercase">
          {name}
        </h2>
        <p className="text-[0.938rem] leading-6.25 text-black/50">
          {description}
        </p>
        <Button backgroundColor="orange" />
      </div>
    </div>
  );
}
