import Image from "next/image";
import ImageDesktop from "../../../public/home/desktop/image-hero.jpg";
import ImageTablet from "../../../public/home/tablet/image-header.jpg";
import dbConnect from "@/app/lib/dbConnect";
import Product, { Products } from "@/app/models/Product";
import { GetServerSideProps } from "next";

type Props = {
  products: Products[];
};

export default function HomePage( {products} : Props) {
  console.log(products)
  return (
    <>
      <p>Home Page</p>
      <Image
        src={ImageDesktop}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      />
      <Image
        src={ImageTablet}
        className="lg:hidden"
        alt="XX99 Mark II Headphones"
      />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Product.find({});

//   /* Ensures all objectIds and nested objectIds are serialized as JSON data */
//   const products = result.map((doc) => {
//     const product = JSON.parse(JSON.stringify(doc));
//     return product;
//   });

//   return { props: { products: products } };
// };