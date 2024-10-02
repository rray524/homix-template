import { render, screen } from "@testing-library/react";
import about_one from "@/public/images/about-1.png";
import about_two from "@/public/images/about-2.webp";
import ProfileCard from "@/app/(default)/pages/about-us/contents/profile-card";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { src: string | { src: string }; alt: string }) => {
    const { src, alt, ...rest } = props;
    return (
      <img src={typeof src === "string" ? src : src.src} alt={alt} {...rest} />
    );
  },
}));

describe("ProfileCard Component", () => {
  it("renders profile and avatar images with correct alt text", () => {
    render(<ProfileCard />);

    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", about_one.src);

    const avatarImage = screen.getByAltText("Avatar");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", about_two.src);
  });

  it("renders the user's name and title", () => {
    render(<ProfileCard />);

    expect(screen.getByText("Kristin Watson")).toBeInTheDocument();

    expect(screen.getByText("Load officer at Homix")).toBeInTheDocument();
  });

  it("applies correct layout and styling", () => {
    render(<ProfileCard />);
    const container = screen.getByAltText("Profile").closest("div");
    expect(container).toHaveClass("relative");

    const userNameElement = screen.getByText("Kristin Watson");
    expect(userNameElement).toHaveClass("font-bold");
  });
});
