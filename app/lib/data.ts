import dbConnect from "@/app/lib/dbConnect";
import Product, { Products } from "@/app/models/Product";

export const fetchProductsByCategory = async (
  category: string,
): Promise<Products[]> => {
  try {
    await dbConnect();

    const products = await Product.find({ category });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
