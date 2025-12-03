"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
export const links = [
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
          <li key={link.name}>
            <Link
              href={link.href}
              className={pathname === link.href ? "text-orange" : ""}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
