"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/ui/dashboard" },
  {
    name: "Headphones",
    href: "/ui/dashboard/headphones",
  },
  { name: "Speakers", href: "/ui/dashboard/speakers" },
  { name: "Earphones", href: "/ui/dashboard/earphones" },
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
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
