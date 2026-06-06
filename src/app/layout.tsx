import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency Montreal | Web Design & SEO Company | Omnivision Design",
  description:
    "Omnivision Design is a Montreal digital marketing agency providing web design, SEO, SEM and social media marketing services. Call (514) 655-6276 for a free quote.",
  keywords:
    "digital marketing agency Montreal, web design Montreal, SEO company Montreal, SEM, social media marketing, Google Ads, web design packages",
  authors: [{ name: "Andreas Deligeorge" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: { canonical: "https://www.omnivisiondesign.com/" },
  openGraph: {
    title: "Digital Marketing Agency Montreal | Web Design & SEO Company",
    description:
      "Omnivision Design is a Montreal digital marketing agency providing web design, SEO, SEM and social media marketing services.",
    url: "https://www.omnivisiondesign.com/",
    siteName: "OmnivisionDesign.com",
    images: [
      {
        url: "https://www.omnivisiondesign.com/wp-content/uploads/2018/05/omnivision-site.jpg",
        width: 1930,
        height: 902,
        alt: "Omnivision Design Montreal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@OmnivisionTweet",
    title: "Digital Marketing Agency Montreal | Omnivision Design",
    description:
      "Omnivision Design is a Montreal digital marketing agency providing web design, SEO, SEM and social media marketing services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-brown-dark text-white antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
