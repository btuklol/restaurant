import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const lilitaOne = Lilita_One({
//   variable: "--font-lilita-one",
//   subsets: ["latin"],
// });

// .lilita-one-regular {
//   font-family: "Lilita One", serif;
//   font-weight: 400;
//   font-style: normal;
// }

export const metadata: Metadata = {
  title: "Nagomi Sushi & Poke",
  description: "Välkommen till Nagomi sushi & poke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
