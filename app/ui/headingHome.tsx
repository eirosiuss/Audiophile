import clsx from "clsx";

type HeadingHomeProps = {
  name: string;
  description?: string;
  children: React.ReactNode;
  className: string;
  isNew?: boolean;
  titleColor: "text-white" | "text-black";
};

export default function HeadingHome({
  name,
  description,
  children,
  className,
  isNew,
  titleColor
}: HeadingHomeProps) {
  return (
    <div className={clsx(className)}>
      {isNew && (
        <p className="text-sm tracking-[10px] text-white/50 uppercase">
          {isNew && "New Product"}
        </p>
      )}
      <h2 className={clsx("md:text-[3.5rem] pt-4 pb-6 text-4xl font-bold uppercase md:py-6", titleColor)}>
        {name}
      </h2>
      {description && (
        <p className="pb-7 text-[0.938rem] text-white/75 md:pb-10">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
