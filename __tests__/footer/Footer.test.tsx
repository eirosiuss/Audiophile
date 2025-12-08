import { render, screen } from "@testing-library/react";
import Footer from "@/app/ui/footer";

describe("Footer", () => {
  it("should show copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  it("should show links", () => {
    render(<Footer />);
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
});
