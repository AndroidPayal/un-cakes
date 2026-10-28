import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UN Cakes & Decor | Cakes, Hampers & Gifts in Raipur",
  description:
    "Discover celebration cakes, birthday and anniversary hampers, gift boxes, packaging and cake-making supplies at UN Cakes & Decor, Bhatagaon Chowk, Raipur.",
  openGraph: {
    title: "UN Cakes & Decor",
    description:
      "Sweet moments, lovely memories. Explore cakes, hampers, boxes and cake-making supplies in Raipur.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
