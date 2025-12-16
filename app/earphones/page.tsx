import PageTitle from "@/app/_ui/headings/pageTitle";
import ProductHeadingCategoryPage from "@/app/_ui/headings/productHeadingCategoryPage";
import { fetchProductsByCategory } from "@/app/_lib/data";
import CategoriesLinks from "@/app/_ui/navigation/categoriesLinks";
import Header from "@/app/_ui/headings/header";
import Button from "@/app/_ui/buttons/button";

export default async function Headphones() {
  const earphones = await fetchProductsByCategory("earphones");

  return (
    <>
      <PageTitle name="Earphones" />
      <main className="mt-16 space-y-30">
        {earphones &&
          earphones
            .slice()
            .reverse()
            .map((earphone, index) => (
              <ProductHeadingCategoryPage
                key={earphone._id.toString()}
                name={earphone.name}
                description={earphone.description}
                isNew={earphone.new}
                reverse={index % 2 === 1}
                src={earphone.categoryImage.tablet.replace("./assets", "")}
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

