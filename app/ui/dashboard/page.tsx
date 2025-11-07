import Image from "next/image";
import ImageDesktop from "../../../public/home/desktop/image-hero.jpg";
import ImageTablet from "../../../public/home/tablet/image-header.jpg";

export default function HomePage() {

  return (
    <>
      <p>Home Page</p>
      <Image
        src={ImageDesktop}
        className="hidden lg:block"
        alt="XX99 Mark II Headphones"
      />
      <Image
        src={ImageTablet}
        className="lg:hidden"
        alt="XX99 Mark II Headphones"
      />
    </>
  );
}
