import Button from "./buttons/button";

type ProductHeadingCategoryPageProps = {
  name: string;
  description: string;
  isNew?: boolean;
};

export default function ProductHeadingCategoryPage({
  name,
  description,
  isNew,
}: ProductHeadingCategoryPageProps) {
  return (
    <div className="flex max-w-277.5 flex-col gap-8 px-6 md:px-10 lg:flex-row xl:mx-auto">
      <div>Image</div>
      <div className="space-y-6 text-center text-balance md:mx-auto md:max-w-143 lg:max-w-111.25 lg:space-y-8 lg:text-left">
        {isNew && (
          <p className="text-orange text-sm tracking-[10px] uppercase">
            New Product
          </p>
        )}
        <h2 className="text-[1.75rem] font-bold text-black uppercase">
          {name}
        </h2>
        <p className="text-[0.938rem] leading-6.25 text-black/50">
          {description}
        </p>
        <Button backgroundColor="orange" />
      </div>
    </div>
  );
}
