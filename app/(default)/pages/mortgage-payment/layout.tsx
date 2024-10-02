import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homix | Mortgage Payment Calculator",
  description: "Discover your dream home with TNC Homeland Real Estate.",
};
export default function MortgagePaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <>{children}</>
    </>
  );
}