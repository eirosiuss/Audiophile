import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";

export default async function Earphones() {
  await dbConnect();
  const products = await Product.find({}).lean();
  const earphones = products
    .map((product) => product)
    .filter((earphone) => earphone.category === "earphones");

  return <p>Earphones</p>;
}
