import FeatureCard from "@/app/(default)/pages/about-us/contents/feature-card.component";
import { render, screen } from "@testing-library/react";
import { FaBeer } from "react-icons/fa";

describe("FeatureCard Component", () => {
  it("renders the icon, title, and description correctly", () => {
    const icon = <FaBeer />;
    const title = "Cheers!";
    const description = "Enjoy a cold beer with friends.";

    render(<FeatureCard icon={icon} title={title} description={description} />);

    expect(screen.getByText(/cheers!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/enjoy a cold beer with friends./i)
    ).toBeInTheDocument();
  });

  it("applies correct CSS classes", () => {
    const icon = <FaBeer />;
    const title = "Cheers!";
    const description = "Enjoy a cold beer with friends.";

    render(<FeatureCard icon={icon} title={title} description={description} />);

    const card = screen.getByText(/cheers!/i).closest("div");
    expect(card).toHaveClass("bg-purple-400");
    expect(card).toHaveClass("opacity-100");
    expect(card).toHaveClass("p-6");
    expect(card).toHaveClass("rounded-lg");
    expect(card).toHaveClass("text-center");
    expect(card).toHaveClass("text-white");
    expect(card).toHaveClass("flex");
    expect(card).toHaveClass("flex-col");
    expect(card).toHaveClass("items-center");
    expect(card).toHaveClass("justify-center");
  });
});
