import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Button from "../ui/buttons/button";
import CategoriesLinks from "../ui/categoriesLinks";
import Speaker from "@/public/product-zx9-speaker/desktop/image-product.svg";
import Image from "next/image";
import HeadingHome from "../ui/headingHome";
import Header from "../ui/header";

export default async function HomePage() {
  await dbConnect();
  const speaker = await Product.findOne({
    category: "speakers",
    name: "ZX9 Speaker",
  });

  const speakerTwo = await Product.findOne({
    category: "speakers",
    name: "ZX7 Speaker",
  });

  const headphone = await Product.findOne({
    category: "headphones",
    name: "XX99 Mark II Headphones",
  });

  const earphone = await Product.findOne({
    category: "earphones",
    name: "YX1 Wireless Earphones",
  });

  return (
    <>
      <div className="h-[600px] bg-[url('@/public/home/desktop/image-hero.jpg')] bg-cover bg-position-[75%_50%] px-6 md:h-[729px] md:bg-position-[87%_50%] md:px-10 lg:bg-right">
        <div className="mx-auto max-w-277.5">
          {headphone && (
            <HeadingHome
              titleColor="text-white"
              titleSize="text-4xl md:text-[3.5rem]"
              className="pt-50 text-center md:mx-auto md:max-w-94 md:pt-54 lg:mx-0 lg:pt-56 lg:text-left"
              isNew={headphone.new}
              name={headphone.name}
              description="Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast."
            >
              <Button backgroundColor="orange" />
            </HeadingHome>
          )}
        </div>
      </div>
      <main className="mx-6 mb-30 md:mx-10 md:mb-24 lg:mb-50 lg:max-w-277.5 xl:mx-auto">
        <CategoriesLinks className="pt-10 pb-30 md:py-24 lg:pt-30 lg:pb-42" />
        {speaker && (
          <div className="bg-orange mb-6 w-full rounded-lg pb-14 md:mb-8 md:pb-16 lg:mb-12 lg:flex lg:items-center lg:gap-35 lg:pb-0">
            <div className="relative flex h-80 items-center justify-center md:h-136 lg:-mb-10 lg:pl-29">
              <div className="absolute z-10 h-80 w-80 rounded-full border border-white/50 md:h-136 md:w-136"></div>
              <div className="absolute z-10 h-70 w-70 rounded-full border border-white/50 md:h-118 md:w-118"></div>
              <div className="lg:hidden">
                <Image src={Speaker} alt="ZX9 Speaker" width={172} />
              </div>
              <div className="z-20 hidden lg:block">
                <Image src={Speaker} alt="ZX9 Speaker" width={410} />
              </div>
            </div>
            <HeadingHome
              titleColor="text-white"
              titleSize="text-4xl md:text-[3.5rem]"
              className="mx-auto -mt-8 px-6 text-center md:-mt-32 md:max-w-88 lg:mt-0 lg:px-0 lg:text-left"
              name={speaker.name}
              description="Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound."
            >
              <Button backgroundColor="black" />
            </HeadingHome>
          </div>
        )}

        <div className="mb-6 h-80 rounded-lg bg-[url('@/public/home/tablet/image-speaker-zx7.jpg')] bg-cover bg-center md:mb-8 lg:mb-12 lg:bg-bottom">
          <div className="mx-auto flex h-full max-w-277.5 flex-col justify-center">
            {speakerTwo && (
              <HeadingHome
                titleColor="text-black"
                titleSize="text-[1.75rem]"
                className="ml-6 md:ml-15"
                name={speakerTwo.name}
              >
                <Button backgroundColor="transparent" />
              </HeadingHome>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-2.5 lg:gap-7.5">
          <div className="h-50 rounded-lg bg-[url('@/public/home/tablet/image-earphones-yx1.jpg')] bg-cover bg-center md:h-80 md:w-1/2"></div>
          {earphone && (
            <div className="bg-grey-light rounded-lg md:w-1/2">
              <HeadingHome
                titleColor="text-black"
                titleSize="text-[1.75rem]"
                className="ml-6 pt-6 pb-10 md:ml-10 md:pt-21 lg:ml-23.5"
                name={earphone.name}
              >
                <Button backgroundColor="transparent" />
              </HeadingHome>
            </div>
          )}
        </div>
      </main>
      <Header />
      <h2>Bringing you the best audio gear</h2>
    </>
  );
}
