import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import CategoryHeading from "@/app/ui/categoryHeading";

export default async function Headphones() {
  await dbConnect();
  const products = await Product.find({}).lean();
  const headphones = products
    .map((product) => product)
    .filter((headphone) => headphone.category === "headphones");

  return (
    <>
      <CategoryHeading name="Headphones" className="text-[1.75rem] py-8" />
    </>
  );
}
