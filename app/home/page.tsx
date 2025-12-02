import Image from "next/image";
import ImageDesktop from "@/public/home/desktop/image-hero.jpg";
import ImageTablet from "@/public/home/tablet/image-header.jpg";
import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Footer from "@/app/ui/footer";
import Button from "../ui/buttons/button";

type Homepage = {
  new: boolean;
  name: string;
  description: string;
};

export default async function HomePage() {
  await dbConnect();
  const product = await Product.findOne().sort({ createdAt: -1 }).lean();
  // console.log(product)

  return (
    <>
      <hr className="border-b-2 border-b-neutral-700" />
      {/* <Image
        src={ImageDesktop}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      /> */}

      <header className="h-[510px] bg-bottom bg-cover bg-[url('@/public/home/mobile/image-header.jpg')]">
        <div className="text-center pt-27">
          <p className="text-sm text-white/50 uppercase tracking-widest">
            New Product
          </p>
          <h1 className="font-bold text-4xl uppercase text-white leading-10 pt-4 pb-6">
            Product
          </h1>
          <p className="text-[15px] text-white/75 leading-6 pb-7">Description</p>
          <Button backgroundColor="orange" />
        </div>
      </header>
      {/* <Image
        src={ImageTablet}
        className="lg:hidden object-cover -z-10"
        alt="XX99 Mark II Headphones"
      /> */}
      <h2>Bringing you the best audio gear</h2>
      <Footer />
    </>
  );
}
