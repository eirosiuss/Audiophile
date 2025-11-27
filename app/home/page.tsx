import Image from "next/image";
import ImageDesktop from "../../public/home/desktop/image-hero.jpg";
import ImageTablet from "../../public/home/tablet/image-header.jpg";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";
import Footer from "@/ui/footer";

export default async function HomePage() {
  await dbConnect()
  const products = await Product.find({}).lean()

  return (
    <>
      <h1>Bringing you the best audio gear</h1>
      <Image
        src={ImageDesktop}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      />
      <Image
        src={ImageTablet}
        className="lg:hidden"
        alt="XX99 Mark II Headphones"
      />
      <Footer/>
    </>
  );
}
