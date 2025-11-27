import { render, screen } from "@testing-library/react";
import HomePage from "@/app/home/page";

jest.mock("@/lib/dbConnect.ts", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}));

jest.mock("@/models/Product.ts", () => ({
  find: jest.fn().mockReturnValue({
    lean: jest.fn().mockResolvedValue([]),
  }),
}));

describe("Home page", () => {
  it("should render a heading", async () => {
    render(await HomePage()); // HomePage() is async function
    expect(
      screen.getByRole("heading", { name: /bringing you the best audio gear/i })
    ).toBeInTheDocument();
  });

  it("should render a new product", async () => {
    render(await HomePage()); // HomePage() is async function
    expect(
      screen.getByRole("heading", { name: /new product/i })
    ).toBeInTheDocument();
  });

  it("should render a product list", async () => {
    render(await HomePage()); // HomePage() is async function
    const headings = ["headphones", "speakers", "earphones"];
    headings.forEach((element) => {
      expect(
        screen.getByRole("heading", { name: new RegExp(element, "i") })
      ).toBeInTheDocument();
    });
  });

  it("should render four random products", async () => {
    render(await HomePage()); // HomePage() is async function
    const buttons = screen.getAllByRole("button", {
      name: /see product/i,
    });
    expect(buttons).toHaveLength(4);
  });
});
