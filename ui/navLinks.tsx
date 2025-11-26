"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/home" },
  {
    name: "Headphones",
    href: "/home/headphones",
  },
  { name: "Speakers", href: "/home/speakers" },
  { name: "Earphones", href: "/home/earphones" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex", {
              "bg-sky-100 text-blue-600": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
