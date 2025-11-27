import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";

export default async function Speakers() {
  await dbConnect();
  const products = await Product.find({}).lean();
  const speakers = products
    .map((product) => product)
    .filter((speaker) => speaker.category === "speakers");

  return <p>Speakers</p>;
}
