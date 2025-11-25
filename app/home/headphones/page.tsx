import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export default async function Headphones() {
  await dbConnect();
  const products = await Product.find({}).lean();
  const headphones = products
    .map((product) => product)
    .filter((headphone) => headphone.category === "headphones");

  return <p>Headphones</p>;
}
