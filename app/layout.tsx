import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Tigoni | Highland Kenya Experience",
  description:
    "Perched in the scenic foothills of the Aberdare Ranges, Tigoni is a captivating destination offering nature trails, tea tours, e-bike experiences, and highland adventures.",
  keywords: "Tigoni, Kenya, Limuru, tea tours, e-bike, highland, travel, accommodation",
  openGraph: {
    title: "Tigoni | Highland Kenya Experience",
    description: "Discover Tigoni — Kenya's most captivating highland destination.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
        width: 1200,
        height: 630,
        alt: "Tigoni Highlands",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
