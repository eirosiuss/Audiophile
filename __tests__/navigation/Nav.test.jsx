import { render, screen } from "@testing-library/react";
import Nav from "@/ui/nav";
import userEvent from "@testing-library/user-event";

describe("Nav", () => {
  it("should render a navigation", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
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

  it("should show cart menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const cartBtn = screen.getByRole("button", {
      name: /cart/i,
    });
    await user.click(cartBtn);
    const cartHeading = screen.getByRole("heading", { name: /cart/i });
    expect(cartHeading).toBeInTheDocument();
  });

  it("should close cart menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const cartBtn = screen.getByRole("button", {
      name: /cart/i,
    });
    await user.click(cartBtn);
    const cartHeading = screen.getByRole("heading", { name: /cart/i });
    expect(cartHeading).toBeInTheDocument();
    await user.click(cartBtn);
    expect(cartHeading).not.toBeInTheDocument();
  });
});
