type PageHeadingProps = {
  name: string;
};

export default function PageHeading({ name }: PageHeadingProps) {
  return (
    <h2 className="bg-black py-8 text-center text-[1.75rem] font-bold text-white uppercase md:py-25 md:text-[2.5rem] md:leading-11">
      {name}
    </h2>
  );
}
