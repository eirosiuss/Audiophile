import dbConnect from "@/app/lib/dbConnect";
import Product, { Products } from "@/app/models/Product";

export const fetchProductsByCategory = async (
  category: string,
): Promise<Products[]> => {
  await dbConnect();
  try {
    const products = await Product.find({ category });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
