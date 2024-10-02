import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { ToastProvider } from "@/context/toast-context";

const epilogue = Epilogue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homepage | Homix Template",
  description: "Your one way stop to build a beautiful home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
