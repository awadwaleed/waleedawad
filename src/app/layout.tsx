import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waleed Awad | Software Engineering Portfolio",
  description: "Waleed Awad's personal software engineering portfolio. Projects and more coming soon.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
