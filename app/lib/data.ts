import dbConnect from "@/app/lib/dbConnect";
import Product, { Products } from "@/app/models/Product";

export const fetchProductsByCategory = async (
  category: string,
): Promise<Products[]> => {
  await dbConnect();
  return Product.find({ category });
};
