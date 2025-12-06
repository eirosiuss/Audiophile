import Image from "next/image";
import Logo from "@/public/shared/desktop/logo.svg";
import NavLinks from "./navLinks";
import FacebookIcon from "@/public/shared/desktop/icon-facebook.svg";
import TwitterIcon from "@/public/shared/desktop/icon-twitter.svg";
import InstagramIcon from "@/public/shared/desktop/icon-instagram.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black px-6">
      <div className="bg-orange mx-auto h-1 w-25"></div>
      <div className="flex flex-col items-center gap-12 py-12 text-center text-[0.813rem] text-white uppercase">
        <Image src={Logo} alt="Logo" />
        <ul className="flex flex-col gap-4">
          <NavLinks />
        </ul>
      </div>
      <div className="flex flex-col gap-12 pb-9.5 text-center text-[0.938rem] leading-6.25 text-white/50">
        <p className="">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="font-bold">Copyright {year}. All Rights Reserved</p>
        <div className="flex justify-center gap-4">
          <Image src={FacebookIcon} alt="Facebook" />
          <Image src={TwitterIcon} alt="Twitter" />
          <Image src={InstagramIcon} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}
