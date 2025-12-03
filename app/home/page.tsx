import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Button from "../ui/buttons/button";

export default async function HomePage() {
  await dbConnect();
  const product = await Product.findOne().sort({ createdAt: -1 }).lean();
  // console.log(product)

  return (
    <>
      <header className="h-[600px] bg-[url('@/public/home/mobile/image-header.jpg')] bg-cover px-6 md:h-[729px] md:bg-[url('@/public/home/tablet/image-header.jpg')] md:px-10 lg:bg-[url('@/public/home/desktop/image-hero.jpg')] bg-right">
        <div className="pt-50 text-center md:pt-54 lg:pt-56 lg:text-left max-w-277.5 mx-auto">
          <p className="text-sm tracking-[10px] text-white/50 uppercase">
            New Product
          </p>
          <h1 className="pt-4 pb-6 md:py-6 text-4xl leading-10 font-bold text-white uppercase md:text-[3.5rem] md:leading-14">
            Product
          </h1>
          <p className="pb-7 md:pb-10 text-[0.938rem] leading-6 text-white/75">
            Description
          </p>
          <Button backgroundColor="orange" />
        </div>
      </header>
      <h2>Bringing you the best audio gear</h2>
    </>
  );
}
