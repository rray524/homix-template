import ButtonLink from "@/components/header/button-link";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ButtonLink Component", () => {
  it("renders correctly with children and href", () => {
    render(<ButtonLink href="/test">Click Me</ButtonLink>);
    const linkElement = screen.getByText(/Click Me/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", "/test");
  });

  it("applies correct CSS classes", () => {
    render(<ButtonLink href="/test">Click Me</ButtonLink>);
    const linkElement = screen.getByText(/Click Me/i);
    expect(linkElement).toHaveClass(
      "toggle lg:flex w-full lg:w-auto px-8 py-4 sm:text-center text-center bg-black text-[18px] rounded-lg text-white font-semibold border items-center justify-center hidden hover:bg-purple-500 transition duration-300"
    );
  });
});
