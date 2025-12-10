import PageTitle from "@/app/ui/pageTitle";
import ProductHeadingCategoryPage from "@/app/ui/productHeadingCategoryPage";
import { fetchProductsByCategory } from "@/app/lib/data";

export default async function Headphones() {
  const headphones = await fetchProductsByCategory("headphones");

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
