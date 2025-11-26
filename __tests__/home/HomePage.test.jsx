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
    it("should render a navigation", async () => {
    render(await HomePage()); // HomePage() is async function
    expect(screen.getByRole('heading', { name: /bringing you the best audio gear/i })).toBeInTheDocument();
  });
});
