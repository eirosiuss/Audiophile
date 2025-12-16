import { fetchProductBySlug } from "@/app/_lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};


export default async function HeadphonePage({ params }: PageProps) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) {
    return <p>Not Found</p>;
  }

  return (
    <>
      <main className="mt-16">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="mt-4 max-w-xl">{product.description}</p>
      </main>

    </>
  );
}
