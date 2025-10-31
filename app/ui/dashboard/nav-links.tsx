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
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
