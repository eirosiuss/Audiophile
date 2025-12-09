import { render, screen } from "@testing-library/react";
import Headphones from "@/app/home/headphones/page";

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

describe("Headphones", async () => {
  it("should render a heading", async () => {
    render(await Headphones());
    expect(
      screen.getByRole("heading", {
        name: /headphones/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render a product list with links", async () => {
    render(await Headphones());
    const hrefs = ["/home/headphones", "/home/speakers", "/home/earphones"];
    const links = screen.getAllByRole("link");
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", hrefs[index]);
    });
  });

  it("should render available products", async () => {
    render(await Headphones());
    const buttons = screen.getAllByRole("button", {
      name: /see product/i,
    });
    expect(buttons).toBeTruthy();
  });

      it("should render a footer", async () => {
      render(await Headphones());
      expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    });
});
