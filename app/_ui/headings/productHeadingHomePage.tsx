import clsx from "clsx";

type ProductHeadingHomePageProps = {
  name: string;
  description?: string;
  children: React.ReactNode;
  className: string;
  isNew?: boolean;
  titleColor: "text-white" | "text-black";
  titleSize: "text-4xl md:text-[3.5rem]" | "text-[1.75rem]";
};

export default function ProductHeadingHomePage({
  name,
  description,
  children,
  className,
  isNew,
  titleColor,
  titleSize,
}: ProductHeadingHomePageProps) {
  return (
    <div className={clsx(className)}>
      {isNew && (
        <p className="text-sm tracking-[10px] text-white/50 uppercase">
          New Product
        </p>
      )}
      <h3
        className={clsx(
          "pt-4 pb-6 font-bold uppercase md:py-6",
          titleColor,
          titleSize,
        )}
      >
        {name}
      </h3>
      {description && (
        <p className="pb-7 text-[0.938rem] text-white/75 md:pb-10">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
