export default function Header() {
  return (
    <header className="mx-6 my-30 flex flex-col gap-10 md:mx-10 md:mb-24 md:gap-15.75 lg:my-40 lg:max-w-277.5 lg:flex-row lg:gap-31.25 xl:mx-auto">
      <div className="h-75 rounded-lg bg-[url('@/public/shared/tablet/image-best-gear.jpg')] bg-cover bg-center lg:h-147 lg:w-1/2 lg:order-2"></div>
      <div className="text-center md:text-balance lg:w-1/2 lg:text-left lg:my-auto">
        <h1 className="mb-8 text-[1.75rem] font-bold text-black uppercase md:text-[2.75rem] md:leading-11">
          Bringing you the <span className="text-orange">best</span> audio gear
        </h1>
        <p className="text-[0.938rem] leading-6.25 text-black/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </header>
  );
}
