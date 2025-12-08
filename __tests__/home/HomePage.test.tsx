//itr
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/home/page";

jest.mock("@/app/lib/dbConnect", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}));

jest.mock("@/app/models/Product", () => {
  return {
    __esModule: true,
    default: {
      findOne: jest.fn().mockResolvedValue({
        name: "Product",
        new: true,
      }),
    },
  };
});

describe("Home page", () => {
  it("should render a heading", async () => {
    render(await HomePage()); // HomePage() is async function
    expect(
      screen.getByRole("heading", {
        name: /bringing you the best audio gear/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render a product list with links", async () => {
    render(await HomePage()); // HomePage() is async function
    const hrefs = ["/home/headphones", "/home/speakers", "/home/earphones"];
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", hrefs[index]);
    });
  });

  it("should render four products", async () => {
    render(await HomePage()); // HomePage() is async function
    const buttons = screen.getAllByRole("button", {
      name: /see product/i,
    });
    expect(buttons).toHaveLength(4);
  });
});
