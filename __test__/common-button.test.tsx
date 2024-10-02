import Button from "@/components/button/common-button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("renders the Button component with children", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies custom classes passed through className prop", () => {
    const { container } = render(
      <Button className="custom-class">Click Me</Button>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("triggers the onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
