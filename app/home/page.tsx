import Image from "next/image";
import ImageDesktop from "@/public/home/desktop/image-hero.jpg";
import ImageTablet from "@/public/home/tablet/image-header.jpg";
import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Footer from "@/app/ui/footer";

export default async function HomePage() {
  await dbConnect();
  const product = await Product.findOne({ slug: "xx99-mark-two-headphones" }).lean();

  return (
    <>
      <hr className="border-b-2 border-b-neutral-700" />
      {/* <Image
        src={ImageDesktop}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      /> */}

      <header className="h-[510px] bg-bottom bg-cover bg-[url('@/public/home/mobile/image-header.jpg')]">
      <div>
        {/* <p>{product.new ? "New Product" : ""}</p> */}
      </div>
      </header>
      {/* <Image
        src={ImageTablet}
        className="lg:hidden object-cover -z-10"
        alt="XX99 Mark II Headphones"
      /> */}
      <h1>Bringing you the best audio gear</h1>
      <Footer />
    </>
  );
}
