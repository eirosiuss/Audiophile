import { render, screen } from "@testing-library/react";
import Nav from "@/ui/nav";
import { usePathname } from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Nav", () => {
  it("should render a navigation", () => {
    render(<Nav />);
    expect(screen.getAllByRole("navigation")).toHaveLength(2);
  });

  it("should show nav links", () => {
    render(<Nav />);
    const links = [
      { name: "home", href: "/home" },
      { name: "headphones", href: "/home/headphones" },
      { name: "speakers", href: "/home/speakers" },
      { name: "earphones", href: "/home/earphones" },
    ];
    links.forEach(({ name, href }) => {
      const link = screen.getByRole("link", { name: new RegExp(name, "i") });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("should apply active class to selected link", () => {
    usePathname.mockReturnValue("/home");
    render(<Nav />);
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    expect(homeLink).toHaveClass("bg-sky-100");
    expect(homeLink).toHaveClass("text-blue-600");
  });

  it("should show mobile-tablet menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const menuBtn = screen.getByRole("button", {
      name: /menu/i,
    });
    await user.click(menuBtn);
    const headings = ["headphones", "speakers", "earphones"];

    headings.forEach((element) => {
      expect(
        screen.getByRole("heading", { name: new RegExp(element, "i") })
      ).toBeInTheDocument();
    });
  });
});
