import PageTitle from "@/app/ui/pageTitle";
import ProductHeadingCategoryPage from "@/app/ui/productHeadingCategoryPage";
import { fetchProductsByCategory } from "@/app/lib/data";
import CategoriesLinks from "@/app/ui/categoriesLinks";
import Header from "@/app/ui/header";
import Button from "@/app/ui/buttons/button";

export default async function Headphones() {
  const speakers = await fetchProductsByCategory("speakers");

  return (
    <>
      <PageTitle name="Speakers" />
      <main className="mt-16 space-y-30">
        {speakers &&
          speakers
            .slice()
            .reverse()
            .map((speaker, index) => (
              <ProductHeadingCategoryPage
                key={speaker._id.toString()}
                name={speaker.name}
                description={speaker.description}
                isNew={speaker.new}
                reverse={index % 2 === 1}
                src={speaker.categoryImage.tablet.replace("./assets", "")}
              >
                {" "}
                <Button backgroundColor="orange" />
              </ProductHeadingCategoryPage>
            ))}
        <CategoriesLinks className="mx-6 max-w-277.5 md:mx-10 xl:mx-auto" />
      </main>
      <Header />
    </>
  );
}

