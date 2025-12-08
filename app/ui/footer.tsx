import Image from "next/image";
import Logo from "@/public/shared/desktop/logo.svg";
import NavLinks from "./navLinks";
import FacebookIcon from "@/public/shared/desktop/icon-facebook.svg";
import TwitterIcon from "@/public/shared/desktop/icon-twitter.svg";
import InstagramIcon from "@/public/shared/desktop/icon-instagram.svg";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black">
      <footer className="bg-black px-6 md:px-10 lg:max-w-277.5 xl:mx-auto">
        <div className="bg-orange mx-auto h-1 w-25 md:mx-0"></div>
        <div className="flex flex-col items-center gap-12 py-12 text-center text-[0.813rem] text-white uppercase md:items-start md:gap-8 md:pt-15 md:pb-8 lg:flex-row lg:items-center lg:justify-between lg:pt-18.75 lg:pb-9">
          <Image src={Logo} alt="Logo" />
          <ul className="flex flex-col gap-4 md:flex-row md:gap-8.5">
            <NavLinks />
          </ul>
        </div>
        <div className="flex flex-col gap-12 pb-9.5 text-center text-[0.938rem] leading-6.25 text-white/50 md:gap-20 md:pb-11.5 md:text-left lg:gap-14">
          <p className="lg:max-w-135 lg:text-balance">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-0">
            <p className="font-bold">Copyright {year}. All Rights Reserved</p>
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TwitterIcon}
                  alt="Twitter"
                  className="hover:cursor-pointer"
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  className="hover:cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
