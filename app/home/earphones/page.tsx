import PageTitle from "@/app/ui/pageTitle";
import ProductHeadingCategoryPage from "@/app/ui/productHeadingCategoryPage";
import { fetchProductsByCategory } from "@/app/lib/data";
import CategoriesLinks from "@/app/ui/categoriesLinks";
import Header from "@/app/ui/header";
import Button from "@/app/ui/buttons/button";

export default async function Headphones() {
  const earphones = await fetchProductsByCategory("earphones");

  return (
    <>
      <PageTitle name="Earphone" />
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

