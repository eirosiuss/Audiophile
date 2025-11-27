import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";

export default async function Headphones() {
  await dbConnect();
  const products = await Product.find({}).lean();
  const headphones = products
    .map((product) => product)
    .filter((headphone) => headphone.category === "headphones");

  return <p>Headphones</p>;
}
