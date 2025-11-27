import { render, screen } from "@testing-library/react";
import MobileNav from "@/ui/mobileComponents/mobileNav.tsx";
import userEvent from "@testing-library/user-event";

describe("Mobile Nav", () => {
  it("should show mobile-tablet navigation menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const menuBtn = screen.getByRole("button", {
      name: /menu/i,
    });
    await user.click(menuBtn);
    const texts = ["headphones", "speakers", "earphones"];
    texts.forEach((element) => {
      expect(screen.getByText(new RegExp(element, "i"))).toBeInTheDocument();
    });
  });

  it("should close mobile-tablet navigation menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const menuBtn = screen.getByRole("button", {
      name: /menu/i,
    });
    await user.click(menuBtn);
    const texts = ["headphones", "speakers", "earphones"];
    texts.forEach((element) => {
      expect(screen.getByText(new RegExp(element, "i"))).toBeInTheDocument();
    });
    await user.click(menuBtn);
    texts.forEach((element) => {
      expect(
        screen.getByText(new RegExp(element, "i"))
      ).not.toBeInTheDocument();
    });
  });

  it("should show nav links", () => {
    render(<MobileNav />);
    const hrefs = ["/home/headphones", "/home/speakers", "/home/earphones"];
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", hrefs[index]);
    });
  });
});
