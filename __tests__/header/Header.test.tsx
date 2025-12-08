import { render, screen } from "@testing-library/react";

import Header from "@/app/ui/header";

describe("Header", () => {
  it("should render header", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", {
        name: /bringing you the best audio gear/i,
      }),
    ).toBeInTheDocument();
  });
});
