import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Button from "../ui/buttons/button";
import CategoriesLinks from "../ui/categoriesLinks";
import Speaker from "@/public/product-zx9-speaker/desktop/image-product.svg";
import Image from "next/image";
import HeadingHome from "../ui/headingHome";

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

  return (
    <>
      <header className="h-[600px] bg-[url('@/public/home/desktop/image-hero.jpg')] bg-cover bg-position-[75%_50%] px-6 md:h-[729px] md:bg-position-[87%_50%] md:px-10 lg:bg-right">
        <div className="mx-auto max-w-277.5">
          {headphone && (
            <HeadingHome
              titleColor="text-white"
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
      </header>
      <main className="mx-6 md:mx-10 lg:max-w-277.5 xl:mx-auto">
        <CategoriesLinks className="pt-10 pb-30 md:py-24 lg:pt-30 lg:pb-42" />
        {speaker && (
          <div className="bg-orange mb-6 w-full rounded-lg pb-14 md:mb-8 md:pb-16 lg:mb-12 lg:flex lg:items-center lg:gap-35 lg:pb-0">
            <div className="relative flex h-80 items-center justify-center md:h-136 lg:-mb-10 lg:pl-29">
              <div className="absolute z-10 h-80 w-80 rounded-full border border-white/50 md:h-136 md:w-136"></div>
              <div className="absolute z-10 h-70 w-70 rounded-full border border-white/50 md:h-118 md:w-118"></div>
              <div className="lg:hidden">
                <Image
                  src={Speaker}
                  alt="ZX9 Speaker"
                  width={172}
                  height={207}
                />
              </div>
              <div className="z-20 hidden lg:block">
                <Image
                  src={Speaker}
                  alt="ZX9 Speaker"
                  width={410}
                  height={493}
                />
              </div>
            </div>
            <HeadingHome
              titleColor="text-white"
              className="mx-auto -mt-8 px-6 text-center md:-mt-32 md:max-w-88 lg:mt-0 lg:px-0 lg:text-left"
              name={speaker.name}
              description="Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound."
            >
              <Button backgroundColor="black" />
            </HeadingHome>
          </div>
        )}

        <div className="h-80 rounded-lg bg-[url('@/public/home/tablet/image-speaker-zx7.jpg')] bg-cover bg-center lg:bg-bottom">
          <div className="mx-auto flex h-full max-w-277.5 flex-col justify-center">
            {speakerTwo && (
              <HeadingHome
                titleColor="text-black"
                className="ml-6 md:ml-15"
                name={speakerTwo.name}
              >
                <Button backgroundColor="transparent" />
              </HeadingHome>
            )}
          </div>
        </div>
      </main>
      <h2>Bringing you the best audio gear</h2>
    </>
  );
}
