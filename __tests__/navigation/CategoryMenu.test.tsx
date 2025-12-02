import { render, screen } from "@testing-library/react";
import CategoryMenu from "@/app/ui/categoryMenu";
import userEvent from "@testing-library/user-event";
import Nav from "@/app/ui/nav";

describe("Category Menu", () => {
  it("should show mobile-tablet navigation menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const menuBtn = screen.getByRole("button", {
      name: /menu/i,
    });
    await user.click(menuBtn);
    const texts = ["headphones", "speakers", "earphones"];
    texts.forEach((element) => {
      expect(screen.getAllByText(new RegExp(element, "i"))).toHaveLength(2);
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
      expect(screen.getAllByText(new RegExp(element, "i"))).toHaveLength(2);
    });
    await user.click(menuBtn);
    texts.forEach((element) => {
      expect(
        screen.queryByText(new RegExp(element, "i"))
      ).not.toBeInTheDocument();
    });
  });

  it("should show nav links", () => {
    render(<CategoryMenu />);
    const hrefs = ["/home/headphones", "/home/speakers", "/home/earphones"];
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", hrefs[index]);
    });
  });
});
