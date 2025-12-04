import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Button from "../ui/buttons/button";
import CategoryMenu from "../ui/categoryMenu";
import Speaker from "@/public/product-zx9-speaker/desktop/image-product.svg";
import Image from "next/image";

export default async function HomePage() {
  await dbConnect();
  const speaker = await Product.findOne({
    category: "speakers",
    name: "ZX9 Speaker",
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
            <div className="pt-50 text-center md:pt-54 lg:max-w-94 lg:pt-56 lg:text-left">
              <p className="text-sm tracking-[10px] text-white/50 uppercase">
                {headphone.new && "New Product"}
              </p>
              <h1 className="pt-4 pb-6 text-4xl font-bold text-white uppercase md:py-6 md:text-[3.5rem]">
                {headphone.name}
              </h1>
              <p className="pb-7 text-[0.938rem] text-white/75 md:pb-10">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Button backgroundColor="orange" />
            </div>
          )}
        </div>
      </header>
      <main className="mx-6 md:mx-10 lg:max-w-277.5 xl:mx-auto">
        <CategoryMenu className="pt-10 pb-30 md:py-24 lg:pt-30 lg:pb-42" />
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
            <div className="-mt-8 px-6 text-center text-pretty md:-mt-16 lg:mt-0 lg:max-w-88 lg:px-0 lg:text-left">
              <h3 className="pb-6 text-4xl text-white uppercase md:text-[3.5rem]">
                {speaker.name}
              </h3>
              <p className="pb-6 text-[0.938rem] text-white/75 md:pb-10">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button backgroundColor="black" />
            </div>
          </div>
        )}
      </main>
      <h2>Bringing you the best audio gear</h2>
    </>
  );
}
