import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <p>Home Page</p>
      <Image
        src="/home/desktop/image-hero.jpg"
        width={1440}
        height={729}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      />
      <Image
        src="/home/tablet/image-header.jpg"
        width={1536}
        height={1458}
        className="lg:hidden"
        alt="XX99 Mark II Headphones"
      />
    </>
  );
}
