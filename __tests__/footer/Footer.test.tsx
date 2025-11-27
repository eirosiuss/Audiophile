import { render, screen } from "@testing-library/react";
import Footer from "@/ui/footer";
import HomePage from "@/app/home/page";

jest.mock("@/lib/dbConnect", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}));

jest.mock("@/models/Product", () => ({
  find: jest.fn().mockReturnValue({
    lean: jest.fn().mockResolvedValue([]),
  }),
}));

describe("Footer", () => {
  it("should render footer", async () => {
    render(await HomePage()); // HomePage() is async function
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

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
