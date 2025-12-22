import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aaron Vinod | Full-Stack Developer",
  description:
    "Portfolio of Aaron Vinod - Full-Stack Developer passionate about building beautiful, accessible web experiences. Explore my projects in web apps, mobile apps, and cloud/DevOps.",
  keywords: [
    "Aaron Vinod",
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Cloud",
    "DevOps",
  ],
  authors: [{ name: "Aaron Vinod" }],
  creator: "Aaron Vinod",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aaron Vinod | Full-Stack Developer",
    description:
      "Portfolio of Aaron Vinod - Full-Stack Developer passionate about building beautiful, accessible web experiences.",
    siteName: "Aaron Vinod Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Vinod | Full-Stack Developer",
    description:
      "Portfolio of Aaron Vinod - Full-Stack Developer passionate about building beautiful, accessible web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
