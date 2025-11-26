import { render, screen } from "@testing-library/react";
import Nav from "@/ui/nav";
import { usePathname } from "next/navigation";
import userEvent from '@testing-library/user-event'

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
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const headphonesLink = screen.getByRole("link", {
      name: /headphones/i,
    });
    const speakersLink = screen.getByRole("link", {
      name: /speakers/i,
    });
    const earphonesLink = screen.getByRole("link", {
      name: /earphones/i,
    });
    expect(homeLink).toHaveAttribute("href", "/home");
    expect(headphonesLink).toHaveAttribute("href", "/home/headphones");
    expect(speakersLink).toHaveAttribute("href", "/home/speakers");
    expect(earphonesLink).toHaveAttribute("href", "/home/earphones");
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
  it("should open mobile menu on click", () => {
  render(<Nav />);
  const user = userEvent.setup();

});
});
