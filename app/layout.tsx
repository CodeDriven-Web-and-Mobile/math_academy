import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ontario Math Academy",
  description: "Comprehensive math education for Ontario students grades 6-12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
