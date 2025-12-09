import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import PageTitle from "@/app/ui/pageTitle";
import ProductHeadingCategoryPage from "@/app/ui/productHeadingCategoryPage";

export default async function Headphones() {
  await dbConnect();
  const headphones = await Product.find({ category: "headphones" });

  console.log(headphones.map((headphone) => headphone._id));

  return (
    <>
      <PageTitle name="Headphones" />
      <main className="mt-16 space-y-30">
        {headphones &&
          headphones.map((headphone) => (
            <ProductHeadingCategoryPage
              key={headphone._id}
              name={headphone.name}
              description={headphone.description}
              isNew={headphone.isNew}
            />
          ))}
      </main>
    </>
  );
}
