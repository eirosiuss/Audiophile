import dbConnect from "@/app/lib/dbConnect";
import Product, { Products } from "@/app/models/Product";
import PageTitle from "@/app/ui/pageTitle";
import ProductHeadingCategoryPage from "@/app/ui/productHeadingCategoryPage";

export default async function Headphones() {
  await dbConnect();
  const headphones: Products[] = await Product.find({ category: "headphones" });
  console.log(headphones.map((h) => h));

  return (
    <>
      <PageTitle name="Headphones" />
      <main className="mt-16 space-y-30">
        {headphones &&
          headphones
            .slice()
            .reverse()
            .map((headphone, index) => (
              <ProductHeadingCategoryPage
                key={headphone._id.toString()}
                name={headphone.name}
                description={headphone.description}
                isNew={headphone.new}
                reverse={index % 2 === 1}
                src={headphone.categoryImage.tablet.replace("./assets", "")}
              />
            ))}
      </main>
    </>
  );
}
