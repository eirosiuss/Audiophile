import { render, screen, waitFor } from "@testing-library/react";
import CategoriesLinks from "@/app/ui/categoriesLinks";
import userEvent from "@testing-library/user-event";
import Nav from "@/app/ui/nav";

describe("Category Menu", () => {
  it("should show-close mobile-tablet navigation menu on click", async () => {
    render(<Nav />);
    const user = userEvent.setup();
    const menuBtn = screen.getByRole("button", {
      name: /menu/i,
    });
    await user.click(menuBtn);
    const links = screen.getAllByRole("link", { name: /shop/i });
    expect(links).toHaveLength(3);
    await user.click(menuBtn);
    await waitFor(() => {
      const linksClosed = screen.queryAllByRole("link", { name: /shop/i });
      expect(linksClosed).toHaveLength(0);
    });
  });

  it("should show nav links", () => {
    render(<CategoriesLinks />);
    const hrefs = ["/home/headphones", "/home/speakers", "/home/earphones"];
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", hrefs[index]);
    });
  });

  it("should close menu on link click", async () => {
    const handleClose = jest.fn();
    render(<CategoriesLinks onClose={handleClose} />);
    const user = userEvent.setup();
    const links = screen.getAllByRole("link", { name: /shop/i });
    for (let i = 0; i < links.length; i++) {
      await user.click(links[i]);
      expect(handleClose).toHaveBeenCalledTimes(i + 1);
    }
  });
});
