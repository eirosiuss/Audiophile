import clsx from "clsx";

type CategoryHeadingProps = {
  name: string;
  className: "text-[1.75rem] py-8" | "text-[2.5rem] py-25 leading-11";
};

export default function CategoryHeading({
  name,
  className,
}: CategoryHeadingProps) {
  return (
    <h2
      className={clsx(
        className,
        "bg-black text-center font-bold text-white uppercase",
      )}
    >
      {name}
    </h2>
  );
}
