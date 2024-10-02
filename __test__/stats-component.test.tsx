import Stats from "@/app/(default)/pages/about-us/contents/stats-component";
import { render, screen } from "@testing-library/react";

describe("Stats Component", () => {
  it("renders all stats correctly", () => {
    render(<Stats />);

    expect(screen.getByText("10+")).toBeInTheDocument();
    expect(screen.getByText("195")).toBeInTheDocument();
    expect(screen.getByText("35+")).toBeInTheDocument();
    expect(screen.getByText("1M+")).toBeInTheDocument();

    expect(screen.getByText("Years in business")).toBeInTheDocument();
    expect(screen.getByText("Countries")).toBeInTheDocument();
    expect(screen.getByText("Integration partners")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("applies correct classes to stat values and labels", () => {
    render(<Stats />);

    const statValues = screen.getAllByText(/10\+|195|35\+|1M\+/);
    statValues.forEach((value) => {
      expect(value).toHaveClass("text-3xl sm:text-5xl font-bold");
    });

    const statLabels = screen.getAllByText(
      /Years in business|Countries|Integration partners|Users/
    );
    statLabels.forEach((label) => {
      expect(label).toHaveClass("text-lg sm:text-xl");
    });
  });
});
