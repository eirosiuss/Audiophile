import Image from "next/image";
import ImageDesktop from "@/public/home/desktop/image-hero.jpg";
import ImageTablet from "@/public/home/tablet/image-header.jpg";
import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/models/Product";
import Footer from "@/app/ui/footer";

export default async function HomePage() {
  await dbConnect()
  const ZX9Speaker = await Product.find({name: "ZX9 Speaker"}).lean()
  // console.log(ZX9Speaker)

  return (
    <>
      <h1>Bringing you the best audio gear</h1>
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem esse. Maxime temporibus minus architecto nihil ad, eos cum, voluptates quibusdam doloremque optio mollitia! Similique expedita maiores voluptate vel deleniti.</p>
      <Footer/>
    </>
  );
}
